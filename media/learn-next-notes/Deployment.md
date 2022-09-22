#  Deployment

## Next.js and Vercel
Vercel is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to Vercel, the following happens by default:

- Pages that use Static Generation and assets (JS, CSS, images, fonts, etc) will automatically be served from the [Vercel Edge Network](https://vercel.com/docs/edge-network/overview), which is blazingly fast.
- Pages that use Server-Side Rendering and API routes will automatically become isolated [Serverless Functions](https://vercel.com/docs/serverless-functions/introduction). This allows page rendering and API requests to scale infinitely.
Vercel has many more features, such as:

##Custom Domains
Once deployed on Vercel, you can assign a custom domain to your Next.js app - [docs](https://vercel.com/docs/concepts/projects/custom-domains).
Environment Variables: You can also [set environment variables](https://vercel.com/docs/build-step#environment-variables) on Vercel. Automatic HTTPS: HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates.
You can learn more about the platform in the [Vercel documentation](https://vercel.com/docs).

##Preview Deployment for Every Push

After deploying to Vercel, try doing the following if you can:

- Create a new branch on your app.
- Make some changes and push to GitHub.
- Create a new pull request (GitHub help page).
You should see a comment by the vercel bot on the pull request page.


Try clicking on the _Preview URL_ inside this comment. You should see the changes you just made.

When you have a pull request open, Vercel automatically creates a preview deployment for that branch on every push. The preview URL will always point to the latest preview deployment.

You can share this preview URL with your collaborators and get immediate feedback.

If your preview deployment looks good, merge it to main. When you do this, Vercel automatically creates a production deployment.

## Develop, Preview, Ship
We’ve just gone through the workflow we call DPS: Develop, Preview, and Ship.

- **Develop**: We’ve written code in Next.js and used the Next.js development server running to take advantage of its hot reloading feature.
- **Preview**: We’ve pushed changes to a branch on GitHub, and Vercel created a preview deployment that’s available via a URL. We can share this preview URL with others for feedback. In addition to doing code reviews, you can do deployment previews.
- **Ship**: We’ve merged the pull request to main to ship to production.
We strongly recommend using this workflow when developing Next.js apps — it will help you iterate on your app faster.