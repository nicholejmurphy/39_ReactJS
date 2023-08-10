import React from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";
import "./static/App.css";

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
