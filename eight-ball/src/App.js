import React from "react";
import ReactDOM from "react-dom";
import "./static/App.css";
import EightBall from "./EightBall";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome to the Magic EightBall!</h1>
      <EightBall />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
