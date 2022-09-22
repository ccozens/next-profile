# API Routes


[API Routes](https://nextjs.org/docs/api-routes/introduction) let you create an API endpoint inside a Next.js app. You can do so by creating a function inside the pages/api directory that has the following format:

```javascript
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // ...
}
```

They can be deployed as Serverless Functions (also known as Lambdas).

## Creating a simple API endpoint
Create a file called `hello.js` in `pages/api` with the following code:

```javascript
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```

Try accessing it at [http://localhost:3000/api/hello](http://localhost:3000/api/hello). You should see *{"text":"Hello"}*. Note that:

`req` is an instance of `http.IncomingMessage`, plus some pre-built middlewares.
`res` is an instance of `http.ServerResponse`, plus some helper functions.

## Some essentials

### Do Not Fetch an API Route from `getStaticProps` or `getStaticPaths`
You should not fetch an API Route from `getStaticProps` or `getStaticPaths`. Instead, write your server-side code directly in `getStaticProps` or `getStaticPaths` (or call a helper function).

This is because `getStaticProps` and `getStaticPaths` run only on the server-side and will never run on the client-side. Moreover, these functions will not be included in the JS bundle for the browser. That means you can write code such as direct database queries without sending them to browsers. Read the [Writing Server-Side code documentation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly) to learn more.

### A Good Use Case: Handling Form Input
A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.

```javascript
export default function handler(req, res) {
  const email = req.body.email;
  // Then save email to your database, etc...
}
```

### Preview Mode
Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re writing a draft on your headless CMS and want to preview the draft immediately on your page. You’d want Next.js to render these pages at request time instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case.

Next.js has a feature called Preview Mode to solve the problem above, and it utilizes API Routes -> [Preview Mode documentation](https://nextjs.org/docs/advanced-features/preview-mode).

### Dynamic API Routes
API Routes can be dynamic, just like regular pages. Take a look at our [Dynamic API Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes) documentation to learn more.