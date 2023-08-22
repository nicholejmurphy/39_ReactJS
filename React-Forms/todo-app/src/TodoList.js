import React, { useState } from "react";
// import "./static/TodoList.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    return (
      <div className="Todos">
        {todos.map((todo) => {
          return (
            <Todo
              id={todo.id}
              key={todo.id}
              todo={todo.task}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    );
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="TodoList-container-form">
      <NewTodoForm addTodo={addTodo} />
      {renderTodos()}
    </div>
  );
}

export default TodoList;
