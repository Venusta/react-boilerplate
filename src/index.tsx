import * as React from "react";
import * as ReactDOM from "react-dom";

function Root() {
  return <h1>Hello, April.</h1>;
}

// Render the Root element into the DOM
ReactDOM.render(
  <Root />,
  document.getElementById("root"),
);
