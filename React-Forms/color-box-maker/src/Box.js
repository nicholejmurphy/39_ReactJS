import React from "react";
import "./static/Box.css";

function Box({ id, color, width, height, removeBox }) {
  function removeMe() {
    removeBox(id);
  }

  return (
    <div className="Box">
      <div
        className="Box-container"
        style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button onClick={removeMe} className="Box-remove" data-testid={id}>
        X
      </button>
    </div>
  );
}

export default Box;
