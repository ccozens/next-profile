# Nextjs intro
Notes from Nextjs' [Learn Nextjs course](https://nextjs.org/learn/basics/create-nextjs-app)

## Navigate
### Links
[API ref](https://nextjs.org/docs/api-reference/next/link)

#####Styling links

```jsx
// Example: Adding className with <Link>
import Link from 'next/link'

export default function LinkClassnameExample() {
  // To add attributes like className, target, rel, etc.
  // add them to the <a> tag, not to the <Link> tag.
  return (
    <Link href="/">
      <a className="foo" target="_blank" rel="noopener noreferrer">
        Hello World
      </a>
    </Link>
  )
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!
```

##Assets and CSS

### Images

[Docs](https://nextjs.org/docs/basic-features/image-optimization)
[API ref](https://nextjs.org/docs/api-reference/next/image)

```jsx
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```

With Image, images are:

- lazy loaded by default
- always rendered in such a way as to avoid Cumulative Layout Shift
- optimized automatically, and on-demand, as users request them.


### metadata - Head
 `<Head>` is a React Component that is built into Next.js. It allows you to modify the `<head>` of a page.
[Head API ref](https://nextjs.org/docs/api-reference/next/head)

### Third-Party JavaScript - Script
`next/script` is an extension of the HTML `<script>` element and optimizes when additional scripts are fetched and executed, eg:  
`strategy` controls when the third-party script should load. A value of `lazyOnload` tells Next.js to load this particular script lazily during browser idle time  
`onLoad` is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly

[Docs](https://nextjs.org/docs/basic-features/script)


### CSS styling

`styles` contains two CSS files: a global stylesheet (globals.css), and a CSS module (Home.module.css).

CSS modules [docs](https://nextjs.org/docs/basic-features/built-in-css-support) allow you to locally scope CSS at the component-level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions.

Can also use Sass, PostCSS (eg Tailwind), CSS-in-JS

#### Layout components using CSS Modules
[Docs](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

- are extracted from the JavaScript bundles at build time and generate .css files that are loaded automatically by Next.js.
- automatically generates unique class names, so no need to worry about class name collisions.
- has code splitting, meaning the minimal amount of CSS is loaded for each page.


Create top level `components` dir containing `layout.js` and `layout.module.css` :


```jsx
// components/layout.js
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```




```javascript
// components/layout.module.css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

Then to use the style in a page:

```jsx
//example-page.js
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
```
Note the outermost component in the jsx is now `<Layout> content </Layout>`

#### Global Styles
[Docs](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)

> **Note: need to restart dev server when load global styles**

```bash
>>> Ctrl+c
>>> npm run dev
```


To load global CSS files, create a file called pages/_app.js with the following content:

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example.

- the global CSS can be placed anywhere and called anything
- it must be imported into pages/_app.js and then imported into other pages from there. Importing from _app.js is the only way to import global CSS, as global CSS elementsd affect all elements on the page.


### Styling tips

- `meta` tags (like `og:image`), which are used to describe a page's content
- Boolean `home` prop which will adjust the size of the title and the image
- “Back to home” link at the bottom if `home` is false
- Added images with `next/image`, which are preloaded with the priority attribute


#### Using `classnames` library to toggle classes
`classnames` is a simple library that lets you toggle class names easily. You can install it using `npm install classnames` or `yarn add classnames`.

[classnames docs](https://github.com/JedWatson/classnames). Here's the basic usage:

- Suppose that you want to create an Alert component which accepts type, which can be 'success' or 'error'.
- If it's 'success', you want the text color to be green. If it's 'error', you want the text color to be red.
You can first write a CSS module (e.g. `alert.module.css`) like this:

```css
.success {
  color: green;
}
.error {
  color: red;
}
```
And use `classnames` like this:

```jsx
import styles from './alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
```

#### Customizing PostCSS Config
Out of the box, with no configuration, Next.js compiles CSS using `PostCSS`.

To customize PostCSS config, you can create a top-level file called `postcss.config.js`. This is useful if you're using libraries like Tailwind CSS.

To add Tailwind CSS:

```bash
npm install -D tailwindcss autoprefixer postcss
```

Then, create a `postcss.config.js`:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
We also recommend [configuring content sources](https://tailwindcss.com/docs/content-configuration) by specifying the content option on `tailwind.config.js`:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
};
```

[Docs for PostCSS](https://nextjs.org/docs/advanced-features/customizing-postcss-config)

[Nextjs x Tailwind Git example](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)






