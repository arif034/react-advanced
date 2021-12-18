import { Component } from "react";

class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.increment2();
  };
  increment2() {
    console.log("Hello World");
  }

  render() {
    return this.props.render(this.state.count, this.increment);
  }
}

export default Counter2;
