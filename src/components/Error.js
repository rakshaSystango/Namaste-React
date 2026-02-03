import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>
        {err.status} : {err.statusText}
      </p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default Error;
