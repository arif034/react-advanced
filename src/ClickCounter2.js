import { Component } from "react";

class ClickCounter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>Clicked {count} times</button>;
  }
}
export default ClickCounter2;
