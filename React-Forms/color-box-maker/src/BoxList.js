import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const testBoxes = [
  { id: uuid(), color: "blue", width: "100px", height: "100px" },
  { id: uuid(), color: "purple", width: "100px", height: "100px" },
  { id: uuid(), color: "yellow", width: "100px", height: "100px" },
];

function BoxList() {
  const [boxes, setBoxes] = useState(testBoxes);

  const renderBoxes = () => {
    return (
      <div className="BoxList-container-boxes">
        {boxes.map((box) => {
          return (
            <Box
              id={box.id}
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

  function addBox(newBox) {
    setBoxes([...boxes, newBox]);
  }

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
