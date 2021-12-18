import { Component } from "react";

class ClickCounter3 extends Component {
  render() {
    return (
      <button onClick={this.props.increment}>
        Clicked {this.props.count} times
      </button>
    );
  }
}

export default ClickCounter3;
