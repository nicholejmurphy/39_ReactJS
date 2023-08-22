import React from "react";

const Todo = ({ id, todo, removeTodo }) => {
  function removeMe() {
    removeTodo(id);
  }

  return (
    <div className="Todo">
      <p>
        {todo}
        <button className="Todo-remove" onClick={removeMe} data-testid={id}>
          X
        </button>
      </p>
    </div>
  );
};

export default Todo;
