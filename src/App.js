import { Component } from "react";
// import Counter from "./Counter.js";
// import ClickCounter from "./ClickCounter";
import ClickCounter2 from "./ClickCounter2.js";
import Counter2 from "./Counter2.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter
          render={(count, incrementCounter) => (
            <ClickCounter count={count} incrementCounter={incrementCounter} />
          )}
        /> */}

        <Counter2
          render={(count, increment) => (
            <ClickCounter2 count={count} increment={increment} />
          )}
        />
      </div>
    );
  }
}

export default App;
