import React from "react"
import ReactDOM from "react-dom"

// React.createElement => ReactElement.JS => HTMLElement(render)
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Aswin Gopinathan in core react"
)

console.log("heading",heading);

// JSX => Babel transpiles it to React.createElement => ReactElement.JS => HTMLElement(render)
const jsxHeading =( <h1 id="heading">
    Aswin Gopinathan in JSX
    </h1>)

console.log("jsxHeading",jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(jsxHeading);

