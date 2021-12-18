import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        Clicked {this.state.count} times
        <button onClick={() => this.incrementCounter()}>Click me</button>
      </div>
    );
  }
}

export default Counter;
