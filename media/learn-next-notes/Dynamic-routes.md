## Dynamic routes

### Page Path Depends on External Data
Next.js allows you to statically generate pages with paths that depend on external data. This enables dynamic URLs in Next.js. Here, we want to create dynamic routes for blog posts:

- We want each post to have the path `/posts/<id>`, where `<id>` is the name of the markdown file under the top-level posts directory.
- Since we have `ssg-ssr.md` and `pre-rendering.md`, we’d like the paths to be /posts/ssg-ssr and /posts/pre-rendering.

1. create a page called `[id].js` under `pages/posts`. Pages that begin with [ and end with ] are dynamic routes in Next.js.
2. In `pages/posts/[id].js`, we’ll write code that will render a post page — just like other pages we’ve created.

```javascript
import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}
```

3. export an async function called `getStaticPaths` from this page. In this function, we need to return a list of possible values for id.

```javascript
import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}
```

>**Important:** The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

4. implement `getStaticProps` again - this time, to fetch necessary data for the blog post with a given id. getStaticProps is given params, which contains id (because the file name is [id].js).


```javascript
import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```

![dynamic routes](how-to-dynamic-routes.png)

[Docs for paths](https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required)


#### Rendering markdown - remark

1. install

```bash
npm install remark remark-html
```

2. import (to `lib/posts.js`)

```javascript
import { remark } from 'remark';
import html from 'remark-html';
```

3. update `getPostData()` function to use `remark`

```javascript
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
```

>**Important:** We added the async keyword to getPostData because we need to use await for remark. async/await allow you to fetch data asynchronously.

That means we need to update `getStaticProps` in `pages/posts/[id].js` to use await when calling `getPostData`:

```javascript
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
```

Finally, update the Post component in pages/posts/[id].js to render contentHtml using dangerouslySetInnerHTML:

```javascript
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
```

#### Formatting date

```bash
npm install date-fns
```

Next, create a file called components/date.js and add the following Date component:

```javascript
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
```

>Note: You can view the different format() string options on the date-fns website.

### Dynamic route summary

####Fetch External API or Query Database
Like getStaticProps, getStaticPaths can fetch data from any data source. In our example, getAllPostIds (which is used by getStaticPaths) may fetch from an external API endpoint:

```javascript
export async function getAllPostIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
```

#### Development vs. Production
In development (npm run dev or yarn dev), getStaticPaths runs on every request.
In production, getStaticPaths runs at build time.

#### Fallback
Recall that we returned `fallback: false` from `getStaticPaths`. What does this mean?

If `fallback` is `false`, then any paths not returned by `getStaticPaths` will result in a **404 page**.

If `fallback` is `true`, then the behavior of `getStaticProps` changes:

- The paths returned from `getStaticPaths` will be rendered to HTML at build time.
- The paths that have not been generated at build time will not result in a `404 page`. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
- In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

If fallback is blocking, then new paths will be server-side rendered with `getStaticProps`, and cached for future requests so it only happens once per path.

This is beyond the scope of our lessons, but you can learn more about `fallback: true` and `fallback: 'blocking'` in the fallback documentation.

#### Catch-all Routes
Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:

- `pages/posts/[...id].js` matches `/posts/a`, but also `/posts/a/b`, `/posts/a/b/c` and so on.
If you do this, in getStaticPaths, you must return an array as the value of the id key like so:

```javascript
return [
  {
    params: {
      // Statically Generates /posts/a/b/c
      id: ['a', 'b', 'c'],
    },
  },
  //...
];
```

And params.id will be an array in getStaticProps:

```javascript
export async function getStaticProps({ params }) {
  // params.id will be like ['a', 'b', 'c']
}
```

Take a look at the [catch all routes documentation](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes) to learn more.

#### Router
If you want to access the Next.js router, you can do so by importing the `useRouter` hook from `next/router`.

#### 404 Pages
To create a [custom 404 page](https://nextjs.org/docs/advanced-features/custom-error-page#404-page), create `pages/404.js`. This file is statically generated at build time.

```javascript
// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```
Take a look at our [Error Pages documentation](https://nextjs.org/docs/advanced-features/custom-error-page) to learn more.

#### More Examples
We have created several examples to illustrate `getStaticProps` and `getStaticPaths` — take a look at their source code to learn more:

[Blog Starter using markdown files](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) [(Demo)](https://next-blog-starter.vercel.app/)  
[WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress) [(Demo)](https://next-blog-wordpress.vercel.app/)  
[DatoCMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-datocms) [(Demo)](https://next-blog-datocms.vercel.app/)  
[TakeShape Example](https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape) [(Demo)](https://next-blog-takeshape.vercel.app/)  
[Sanity Example](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) [(Demo)](https://next-blog-sanity.vercel.app/)