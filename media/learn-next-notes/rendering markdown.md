# Parsing markdown
I thought this would be simple! 

Packages:
Complete package.json

```json
{
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest --watch",
    "test:ci": "jest --ci"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "isomorphic-dompurify": "^0.22.0",
    "micromark": "^3.0.10",
    "next": "latest",
    "react": "^18.1.0",
    "react-dom": "^18.1.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "5.16.4",
    "@testing-library/react": "13.2.0",
    "@testing-library/user-event": "14.2.0",
    "@types/react": "18.0.9",
    "jest": "28.1.0",
    "jest-environment-jsdom": "28.1.0",
    "typescript": "4.6.4"
  }
}
```
At time of writing "next": "latest", -> 12.3.1 

I chose to host the markdown files locally (or rather, on github) - Nextjs comment this makes sense for [small, personal projects](https://nextjs.org/blog/markdown) - as I'm initally rendering 2 files, I left choosing and setting up a CMS for later.

Key steps:

1. write markdown
2. read in markdown
2. ```gray-matter``` to parse the post metadata / content sections
3. ```micromark``` to convert markdown to html
4. ```isomorphic-dompurify``` to check html safe
5. .dangerouslySetInnerHTML to set as HTML

## Process
1. write markdown.  
	Currently, I edit markdown in [MacDown](https://macdown.uranusjr.com/). I took a fair amount of code from NEXTjs' blog starters and amended it. One aspect I like was adding YAML front matter to markdown files and parsing that to provide metadata. So, my markdown format is:
	
	```markdown
	---
	title: Baby Driver
	date: 2022-10-03
	---
	Asked a girl what she wanted to be
	She said, "Baby, can't you see?
	I wanna be famous, a star of the screen"
	But you can do something in between
	```
NB - generate current date and time in JS using this snippet, truncated [from here](https://www.30secondsofcode.org/js/s/to-iso-string-with-timezone):

	```javascript
	const toISOStringWithTimezone = date => {
	  const tzOffset = -date.getTimezoneOffset();
	  const diff = tzOffset >= 0 ? '+' : '-';
	  const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
	  return date.getFullYear() +
	    '-' + pad(date.getMonth() + 1) +
	    '-' + pad(date.getDate()) 	};
	
	toISOStringWithTimezone(new Date()); // '2022-10-03'
	```


	 
2. read in markdown into project.
As this is a Next.js project there are 2 sides to this. One is actually reading in the .md files, and the second is setting up getStaticProps() to run the node commands on the server.

	a. import files
	
	```javascript
	import fs from 'fs';
	import { join } from 'path';
	```
	
	- ```fs``` is the [Node.js File system module](https://nodejs.org/api/fs.html#file-system). I used [readFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options), which reads files synchronously - ie node pauses the program execution until all given files are read, then resumes execution.
	- ```path.join``` is a [Node module](https://nodejs.org/api/path.html#pathjoinpaths) for joining path segments to make a filepath.

	
	b. set the path
	
	```javascript
	const postsDirectory = join(process.cwd(), './pages/markdown/')
	```
	
	```process.cwd()``` returns the currend working directory of the node process, and here I've appended /pages/markdown as my markdown files are stored:
	

	```
	root
	┗ pages
		┗ markdown
 			┣ frontend.md
 			┗ molbio.md
 ```
 
 Actually read in files:
 
 	```typescript
 	export function getItemsFromFile(filename: string[], fields: string[] = []) {
  
	  const sections: object[] = [];
	  filename.forEach((file) => {
	    const fullPath = join(postsDirectory, `${file}.md`) // set path
	    const fileContents = fs.readFileSync(fullPath, 'utf8') // read files into fileContents
    ```
 
 3. process markdown into html

	```typescript
	
	import import matter from 'gray-matter';
	
	//...
	const { data, content } = matter(fileContents) // use graymatter to read and destructure markdown files

    const {fileTitle, fileDate} = data; // destructure matter data (ie file header) into variables
    ```


    
 4. convert markdown content to html
 
 
  ```typescript
  import { micromark } from 'micromark';
  //...
  const htmlContent = micromark(content); // convert markdown content to html
  ```
  

	At this point, creating a React object htmlContent will actually display the html on the web page:
	
	```html
	<div> { htmlContent} </div>
	```
	Displays as:
	
	```html
	<h1>Baby Driver</h1>
	<h2>Lennon / McCartney</h2>
	<p>Asked a girl what she wanted to be
	She said, &quot;Baby, can't you see?
	I wanna be famous, a star of the screen&quot;
	But you can do something in between</p>
	```
	
 5. So we need to set it as HTML in React. Nextjs use ```dangerouslySetInnerHTML``` - so-called because it can render your site vulberable to [cross-site scripting (XSS) attacks](https://en.wikipedia.org/wiki/Cross-site_scripting), where scripts can be used to bypass security controls. I don't handle data here, but nevertheless it seems good practice to not leave potential vulnerabilitles. A [LogRocket blogpost](https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/) comments that tools such as [DOMPurify](https://github.com/cure53/DOMPurify) can be used to check your html doesn't contain any potentially malicious code. I actually used [isomorphic DOMPurify](https://github.com/kkomelin/isomorphic-dompurify) as it played more nicely with TypeScript:
 
 
 ```typescript
	import { sanitize } from 'isomorphic-dompurify';
	//...
	const checkedHtml = sanitize(htmlContent); 

	```

 5. The checked HTML, along with title and date from the front matter, are then exported
    ```typescript
	```


 
 4. Full file (processMarkdown.ts)
	
	```typescript
	export function getItemsFromFile(filename: string[], fields: string[] = []) {
  
  const sections: object[] = [];
  filename.forEach((file) => {
    const fullPath = join(postsDirectory, `${file}.md`) // set full file path
    const fileContents = fs.readFileSync(fullPath, 'utf8') // reads all files in dir and pauses execution or rest of program until finished
    const { data, content } = matter(fileContents) // use graymatter to read and destructure markdown files

    const {fileTitle, fileDate} = data; // destructure matter data (ie file header) into variables

    const htmlContent = micromark(content); // convert markdown content to html
    const checkedHtml = sanitize(htmlContent); // check HTML is safe to use with dangerouslySetInnerHTML

  // set another type
    type Items = {
      [key: string]: string
    };

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'title') {
        items[field] = fileTitle
      }
      if (field === 'date') {
        items[field] = fileDate
      }
      if (field === 'content') {
        items[field] = checkedHtml
      }

      if (typeof data[field] !== 'undefined') {
        items[field] = data[field]
      }
    })
    
    sections.push(items)});

    return sections;
};
```
	
	
	
	
	
## file update

export default function App() {

  const parseMarkdown = (file) => {

      // contains raw markdown
const fileContents = fs.readFileSync(file, 'utf8');

// Use gray-matter to parse the post metadata section
const matterResult = matter(fileContents);
// console.log(matterResult.data);
// console.log(matterResult.content);

const formatted = micromark(matterResult.content);
console.log(formatted);
const formattedToString = formatted.toString();
return formattedToString;
  }
  
console.log(matterResult.data);

	title: "Baby Driver"
	date: "2020-03-16T05:35:07.322Z"
	author: "Beatles"

console.log(matterResult.content);


	# Baby Driver
	
	## Lennon / McCartney
	
	Asked a girl what she wanted to be
	She said, "Baby, can't you see?
	I wanna be famous, a star of the screen"
	But you can do something in between
	 


console.log(formatted);

	<h1>Baby Driver</h1>
	<h2>Lennon / McCartney</h2>
	<p>Asked a girl what she wanted to be
	She said, &quot;Baby, can't you see?
	I wanna be famous, a star of the screen&quot;
	But you can do something in between</p>


console.log(formattedToString);
	
	<h1>Baby Driver</h1>
	<h2>Lennon / McCartney</h2>
	<p>Asked a girl what she wanted to be
	She said, &quot;Baby, can't you see?
	I wanna be famous, a star of the screen&quot;
	But you can do something in between</p>
	
	
	
1. get file by name
2. render as html


isomorphic-dompurify
https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/