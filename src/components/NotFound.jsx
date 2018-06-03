import React from "react";
import Header from "./Header";

const NotFound = () => (
  <div className="container">
    <Header tagline="404 -  Page not found!" />
    <div className="alert alert-warning">
      <strong>
        Ooops .... sorry!<br />
      </strong>
      The requested page could not be found.
    </div>
  </div>
);

export default NotFound;
