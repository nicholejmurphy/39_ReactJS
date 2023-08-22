import { React, useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  function handleChange(evt) {
    setTask(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (task !== "") {
      addTodo({ task, id: uuid() });
      setTask("");
    }
  }

  return (
    <div className="NewTodoForm">
      <form className="NewTodoForm-form" onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="Enter your task here"
          onChange={handleChange}
          value={task}
        ></input>
        <button>Add to List</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
