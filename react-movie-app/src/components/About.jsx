import { Component } from "react";
import Child from "./Child";
class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log("I am constructor");
    this.state = {
      counter: 0,
    };
    // this.state = {
    //   counter: 0,
    //   posts: [],
    // };
    console.log(this);
  }

  componentDidMount() {
    // console.log("I am mounted");
    // this.fetchApi();
  }

  async fetchApi(params) {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const requests = await data.json();
    this.setState({ posts: requests });
  }

  componentDidUpdate() {
    // console.log("I am updating", this.state.counter, this.state.posts);
  }

  componentWillUnmount() {
    // console.log("hey I am unmounted");
  }

  render() {
    // console.log("render parent");
    console.log(this.state);
    return (
      <div>
        About
        {/* {this.state.counter} */}
        <button onClick={() => this.setState({ counter: 2 })}>Click</button>
        <Child name="hello" />
      </div>
    );
  }
}
export default About;

/**
 
 *
 * const a = {
 * name:"hello",
 * display: function(){
 * console.log(this.name)}
 * }
 * 
 * a.display();
 */
