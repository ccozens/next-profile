---
title: "favicon"
date: "2022-10-13"
---

1. decided on a stylised C (the initial for both my first and surnames)
2. chose one I like by [duzulek](https://www.deviantart.com/duzulek) at [DeviantArt](https://www.deviantart.com/duzulek/art/Letter-C-833165929)
3. converteed to favicon using [favicon.io](https://favicon.io/)
4. pasted all files generated into public, overwriting NEXTjs default favicon.ico andd adding:
	- andrroid-chrome-192x192.png
	- andrroid-chrome-512x512.png
	- apple-touch-icon.png
	- favicon-16x16.png
	- favicon-32x32.png
	- site.webmanifest:
		
		```
		{
  "name": "",
  "short_name": "",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
		```

5. Updated layout.tsx to read:

```typescript
import { ReactNode } from 'react';
import Header from './header';
import Background from './background';
import Footer from './footer/footer';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Chris Cozens</title>
        <link rel="icon" href="/favicon.ico" />
        
        {/* start new lines */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	    <link rel="manifest" href="/site.webmanifest" />
	    {/* end new lines */}
	      
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
      </Head>
      <Background />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```