"use client"; // Error components MUST be client components.

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    //Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          //Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
