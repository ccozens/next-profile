import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter';
import { micromark } from 'micromark';
import { sanitize } from 'isomorphic-dompurify';


const postsDirectory = join(process.cwd(), './pages/markdown/') // to set path

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

/* works for single file
export function getItemsFromFile(filename: string, fields: string[] = []) {
  const fullPath = join(postsDirectory, `${filename}.md`) // set full file path
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
  
  return items
};

*/


export async function getReadme(fileUrl: string) {
  const fileFetch = await fetch(fileUrl) // fetch md from github
  .then((response) => response.text())  // parse response into text
  
  const htmlContent = micromark(fileFetch); // convert markdown content to html
  const checkedHtml = sanitize(htmlContent); // check HTML is safe to use with dangerouslySetInnerHTML
  // const checkedHtml = 'beep';
  return checkedHtml;
};

