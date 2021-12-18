import { Component } from "react";
import Counter from "./Counter.js";
import ClickCounter from "./ClickCounter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter
          render={(count, incrementCounter) => (
            <ClickCounter count={count} incrementCounter={incrementCounter} />
          )}
        />
      </div>
    );
  }
}

export default App;
