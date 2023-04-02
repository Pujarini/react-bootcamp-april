import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
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

const span = React.createElement("span");
span.innerHTML = "Hello";

// console.log(span);

//2 ways of creating React element
const heading = React.createElement("h1", {
  className: "btn",
  children: [React.createElement("span", { children: "Hello" }), "World"],
});

console.log(heading, "heading");

const heading2 = (
  <h1 className="btn" xyz="abc">
    <span>Hello</span>World
  </h1>
);

console.log(heading2, "heading2");

//component

// function DisplayHelloWorld(props) {
//   console.log(props);
//   return heading2;
// }

//using props
function SayGreeting(props) {
  console.log("hello");
  let [hobby, setHobby] = useState("cricket");
  const [count, setCount] = useState(0);

  ////Hoobby: football

  //   function changeHobby() {
  //     setHobby("Hello world");
  //   }

  function increaseCount() {
    let c = count + 1;
    setCount(c);
  }

  function decreaseCount() {
    let c = count - 1;
    setCount(c);
  }
  console.log(count);
  return (
    <h1 className="heading" xyz="abc">
      {/* <span>{props.greeting}</span>
      {props.name}
      <p>Your age is : {props.age}</p>
      <p>Your hobby is : {hobby}</p>
      <button onClick={changeHobby}>Change Hobby</button> */}
      <button onClick={increaseCount}>+</button>
      <span>{count}</span>
      <button onClick={decreaseCount}>-</button>
    </h1>
  );
}

// display ---> sayGreeting

function DisplayGreeting(props) {
  if (props.time >= 6) {
    return (
      <SayGreeting greeting="Good evening" name={props.name} age={props.age} />
    );
    ///Good evening
  } else {
    return (
      <SayGreeting greeting="Good morning" name={props.name} age={props.age} />
    );
    //Good Morning
  }
}

// before 6 it should give Good morning After 6 it should give me Good evening

const root = document.getElementById("root");
// console.log(heading);
const rootElement = ReactDOM.createRoot(root);
// console.log(rootElement);
rootElement.render(<DisplayGreeting time="1" name="Subham" age="20" />);
/**
 * 1. Element
 * 2. Root element
 * 3. props
 *JSX
 4. Component
 5.State v.s props
<div id="root">

<h1><span>Hello</span> World</h1>
</div>
1. create a root
2. create a react element
 * 
 */
