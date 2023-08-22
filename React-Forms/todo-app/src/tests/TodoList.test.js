import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { v4 as uuid } from "uuid";
import TodoList from "../TodoList";

function addTodo(todoList, task = "Clean room", id = uuid()) {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task } });
  const addBtn = todoList.getByText("Add to List");
  fireEvent.click(addBtn);
}

test("it renders without crashing", () => {
  render(<TodoList />);
});

test("it should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment).toMatchSnapshot();
});

test("it should add todo", () => {
  const todoList = render(<TodoList />);
  expect(todoList.queryByText("X")).not.toBeInTheDocument();
  addTodo(todoList);
  expect(todoList.queryByText("X")).toBeInTheDocument();
});

test("it should remove todo", () => {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  const removeBtn = todoList.getByText("X");
  expect(removeBtn).toBeInTheDocument();
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
