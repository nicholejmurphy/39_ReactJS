import React from "react";
import Pokedex from "./Pokedex.js";
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
