"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

//When to use Client Components?
/*The above function showcases that when using hooks it is 
necessary to declare the component as a "client" side component. 
State management is primarily handled on the client side. So when using:
-useState
-useEffect, etc.. you'll need to add the "use client" string on top to avoid errors.

//When to use Server Components?
-Fetching data
-Access backend resources (directly)
-Keep sensitive information on the server (access tokens, API keys, etc)
-Keep large dependencies on the server / Reduce client-side JavaScript
*/
