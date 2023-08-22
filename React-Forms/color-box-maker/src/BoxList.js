import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import "./static/BoxList.css";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const testBoxes = [
  { id: uuid(), color: "blue", width: 100, height: 100 },
  { id: uuid(), color: "purple", width: 100, height: 100 },
  { id: uuid(), color: "yellow", width: 100, height: 100 },
];

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return (
      <div className="BoxList-container-boxes">
        {boxes.map((box) => {
          return (
            <Box
              id={box.id}
              key={box.id}
              color={box.color}
              width={box.width}
              height={box.height}
              removeBox={removeBox}
            />
          );
        })}
      </div>
    );
  };

  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  function removeBox(id) {
    const newBoxes = [];
    for (let box of boxes) {
      if (box.id !== id) {
        newBoxes.push(box);
      }
    }
    setBoxes(newBoxes);
  }

  return (
    <div className="BoxList-container-form">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;
