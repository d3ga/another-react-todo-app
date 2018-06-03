import React from "react";

// Stateless Functional Component

const Header = props => (
  <header className="header">
    {/* Building a ToDo app! */}
    <h1 className="header-title">What to do?</h1>
    <span className="tagline">{props.tagline}</span>
  </header>
);

export default Header;
