// Two types of Metadata: "Static" & "Dynamic".
// Both types are only supported in Server Components.

/*1. STATIC:
To define static metadata, export a Metadata object from a layout.js or static page.js file.*/
export const metadata = {
  title: "Home",
};
// Output:
// <head>
//  <title>Home</title>
// </head>
export default function Page() {
  return <h1>My Normal Next.js page with static metadata</h1>;
}

/*2. DYNAMIC:
You can use generateMetadata function to fetch metadata that requires dynamic values.*/
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}
// Output:
// <head>
//  <title>Unique Product</title>
// </head>
export default function Page() {
  return <h1>My Normal Next.js page with dynamic metadata</h1>;
}

// Below an example of Metadata from an HTML file:
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="stylesheet" href="style.css" />
  <title>Expanding Cards</title>
</head>;

//- In essence, metadata in Next.js is a crucial aspect of building well-structured, accessible, and SEO-friendly web applications. Understanding how to leverage the Metadata API effectively is key to optimizing your Next.js projects for both search engines and users.
