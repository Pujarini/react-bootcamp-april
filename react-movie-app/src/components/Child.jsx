import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log(this, "child");
    console.log("i am constructor child");
    this.state = {
      name: "hello",
    };
  }

  componentDidMount() {
    console.log("I am mounted child");
  }

  componentDidUpdate() {
    console.log("I am updating child");
  }

  componentWillUnmount() {
    console.log("hey I am unmounted child");
  }

  render() {
    console.log("render child", this.props.name, this.state);
    return <div>Child</div>;
  }
}
