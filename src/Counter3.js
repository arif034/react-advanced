import { Component } from "react";

class Counter3 extends Component {
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
  };

  render() {
    return this.props.render(this.state.count, this.increment);
  }
}

export default Counter3;
