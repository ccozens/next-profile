## Pre-rendering and data fetching

### Pre-rendering
[Docs](https://nextjs.org/docs/basic-features/pages#pre-rendering)
Next.js pre-renders by default, for better load and SEO performance. It generates HTML for each page in advance, with minimal JS and CSS. Pages are hydrated (full JS code loads and runs to make the page fully interactive) on actual page load.

React has no pre-rendering, meaning this happens on page load:
![No pre-rendeering](./no-pre-rendering.png)

Where Next/js pre-rendered files load like this:
![with pre-rendering](./pre-rendering.png)


#### Static Generation 
[Static generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
![Static generation](./static-generation.png)
####Server-side Rendering
[Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) is the pre-rendering method that generates the HTML on each request.
![Server side rendering](./server-side-rendering.png)

### Per-page basis
- Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
- in dev mode, all pages are pre-rendered on every request. When going to production, Static Generation will happen once, at build time, and not on every request.

![Per page basis](./per-page-basis.png)

### When to use Static Generation vs Server-side Rendering
Ask:  "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation. Next recommend SG (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

If a page shows frequently updated data (eg live auctions) and the page content changes on every equest, use SSR.

### Static Generation with and without Data

- [SG without data](https://nextjs.org/docs/basic-features/pages#static-generation-recommended): HTML is rendered
- [SG with data](https://nextjs.org/docs/basic-features/pages#static-generation-with-data): you may need to access the file system, fetch external API, or query your database at build time. 

#### SG with data - `getStaticProps`

When you export a page component, you can also export an async function called getStaticProps. If you do this, then:

- `getStaticProps` runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the page. ie, Nextjs will resolve any data depemndencies before rendering the page.

```javascript
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

#### Creating the markdown files
First, create a new top-level directory called posts (this is not the same as pages/posts) in your root folder. Inside posts, create two files: pre-rendering.md and ssg-ssr.md.

Now, copy the following code to posts/pre-rendering.md:

```markdown
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js let's you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```


Then, copy the following code to posts/ssg-ssr.md:

```markdown
---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
```


> You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.

Installing gray-matter
First, install gray-matter which lets us parse the metadata in each markdown file.

```
npm install gray-matter
```

##### Creating the utility function to read the file system
Next, we’ll create a utility function for parsing data from the file system. With this utility function, we’d like to:

Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
List the data on the index page, sorted by date.
Create a top-level directory called lib in the root directory. Then, inside lib, create a file called `posts.js`, and copy and paste this code:

```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

```
Note:

You don't need to understand what the code above is doing in order to learn Next.js, the function is to make the blog example functional. But if you'd like to learn more:

> - fs is a Node.js module that let's you read files from the file system.
- path is a Node.js module that let's you manipulate file paths.
- matter is a library that let's you parse the metadata in each markdown file.
- In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.

#### Fetching the blog data
Now that the blog data is parsed, we need to add it to our index page (pages/index.js). We can do this with a Next.js data fetching method called getStaticProps(). 

##### Using Static Generation (getStaticProps()) for local data
Now, we need to add an import for `getSortedPostsData` and call it inside `getStaticProps` in `pages/index.js`.

Open `pages/index.js` in your editor and add the following code above the exported Home component:

```javascript
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
```
By returning `allPostsData` inside the props object in `getStaticProps`, the blog posts will be passed to the Home component as a prop. Now you can access the blog posts like so:

```javascript
export default function Home ({ allPostsData }) { ... }
```
To display the blog posts, let's update the Home component to add another <section> tag with the data below the section with your self introduction. Don't forget to also change the props from () to `({ allPostsData })`:

```javascript
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
```

##### Using Static Generation (getStaticProps()) for remote data

Either via an API:

```javascript
export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  return res.json();
}
```
>Next.js polyfills fetch() on both the client and server. You don't need to import it.

Or direct DB query:
```javascript
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```

This is possible because `getStaticProps` only runs on the server-side, meaning you can write code such as direct database queries without them being sent to browsers.

`getStaticProps`: 
- runs at build time, so cannot use data that’s only available during request time, such as query parameters or HTTP headers.
- can only be exported from a page - cannot be exported from non-page files. One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

##### Fetching Data at Request Time - `getServerSideProps()`

```javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```

- `context` contains request-specific parameters
- `getServerSideProps` should only be used if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

#### Client-side rendering
If you do not need to pre-render the data, you can also use [Client-side Rendering](https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side)

- Statically generate (pre-render) parts of the page that do not require external data.
- When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.

#### SWR
The team behind Next.js has created a React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:

```javascript
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

Check out the (SWR documentation)[https://swr.vercel.app/] to learn more.