import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to the homepage
      </a>
    </div>
  );
};

export default ErrorPage;
