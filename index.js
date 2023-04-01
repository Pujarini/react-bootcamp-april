import React from "react";
import ReactDOM from "react-dom/client";
// const body = document.querySelector("body");
// console.log(body);

// const heading = document.createElement("h1");
// heading.innerHTML = "hello world";
// console.log(heading);
// body.appendChild(heading);

// const button = document.createElement("button");
// button.innerHTML = "Click me";
// button.className = "btn";

// button.addEventListener("click", onclickHandler);
// body.appendChild(button);

// function onclickHandler(event) {
//   alert("hello world");
// }

const root = document.getElementById("root");
console.log(root);
const heading = React.createElement("h1", {
  className: "btn",
  xyz: "abc",
  children: "Hello World",
});

console.log(heading);
const rootElement = ReactDOM.createRoot(root);
console.log(rootElement);
rootElement.render(heading);
/**
 * 1. Element
 * 2. Root element
 */
