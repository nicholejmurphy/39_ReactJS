import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "../NewTodoForm";

test("it renders without crashing", () => {
  render(<NewTodoForm />);
});

test("it should match snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment).toMatchSnapshot();
});
