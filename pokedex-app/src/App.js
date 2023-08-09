import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
