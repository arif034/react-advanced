import { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <button onClick={incrementCounter}>Clicked {count} times</button>;
  }
}
export default ClickCounter;
