import { Component } from "react";
// import Counter from "./Counter.js";
// import ClickCounter from "./ClickCounter";
// import ClickCounter2 from "./ClickCounter2.js";
// import Counter2 from "./Counter2.js";
import ClickCounter3 from "./ClickCounter3.js";
import Counter3 from "./Counter3.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter3
          render={(count, increment) => (
            <ClickCounter3 count={count} increment={increment} />
          )}
        />
      </div>
    );
  }
}

export default App;
