import React, { Fragment } from "react";

// Statefull Component

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Building a ToDo app! */}
        <h1 className="foo">What to do?</h1>
        <span className="tagline">{this.props.tagline}</span>
      </Fragment>
    );
  }
}

export default Header;
