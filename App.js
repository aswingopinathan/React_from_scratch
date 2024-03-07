// make structure
/*
<div id="parent">
    <div id="child">
        <h1>Hello Aswin, how are you</h1>
    </div>
</div>


*/
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
const parent = React.createElement("div", {id:"parent"},
[React.createElement("div", {id:"child"},
[
React.createElement("h1", {id:"heading"}, "Hello Aswin, how are you"),
React.createElement("h2", {id:"heading"}, "Hello Aswin, how are you")
]),
React.createElement("div", {id:"child"},
[
React.createElement("h1", {id:"heading"}, "Hello Aswin, how are you"),
React.createElement("h2", {id:"heading"}, "Hello Aswin, how are you")
])
])

console.log("parent",parent)

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(parent);
