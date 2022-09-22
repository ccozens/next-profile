Big benefit of next is can fetch data and render html on the server.
Why? -> end user gets rendered content quicker, and search engine bots can crawl the html to index your site.

two options:

SG: static generation
render all pages as HTML at build time and upload to static host so they can be delivered extremely quickly over CDN.

cons:
data may become stale as need to rebuild and redeploy site if data on server changes.
scaling: hard to pre-render 1000000 pages!

so: SG best suited to sites that don't change often and have relatively low total number of pages, eg blog - few hundred pages that likely don't change much over time

server side rendering
generates each page on server when requested by the user
	ideal when data changes regularly as ensures user will get latest data
	however:
		slower (need server in place to respond to those requests)
		ineffecient data caching