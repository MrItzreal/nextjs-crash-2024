// Next.js provides 3 options to perform Data Fetching:

// 1. Server Side Rendering (SSR): fetches data for a page on every request from the server. This means that the page is generated on the server each time a user visits it. Potentially increases the initial load time of a page.

// 2. Static Site Generation (SSG): generates the HTML for your pages at build time. The generated pages are then served statically to users. Not good for dynamic content.

// 3. Incremental Static Regeneration (ISR): combines the benefits of SSG and SSR. Pages are initially generated statically at build time (like SSG). However, you can configure Next.js to revalidate and regenerate these pages at specific intervals or on-demand.

/*Choosing the Right Approach:

SSR: When you need frequently updated or personalized content.
SSG: When you have mostly static content and prioritize performance.
ISR: When you want a balance between performance and fresh content.*/

/*
HERE ARE THE DEFINITIONS IN MY OWN WORDS!!
-Server Side Rendering (SSR): it fetches the data for a page upon request to a server. Once the data is obtain it renders your page. Basically in this process the page is render everytime you try to access it.

-Static Site Generation (SSG): It fetches the data from the server once and everytime you need to access this data since is embedded into the HTML is will display the content thus why is a great choice for static content.

-Incremental Static Regeneration (ISR): this one is a combination of both SSR and SSG in the sense that it fetches the data from a server to display data but the key difference is that you can revalidate the data based on an interval. in simple terms, once your data is fetched the revalidation gets triggered at a particular moment to see if the data is still the same or if it changed */
