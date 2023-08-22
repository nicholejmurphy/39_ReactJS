import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "../NewBoxForm";

test("it renders without crashing", () => {
  render(<NewBoxForm />);
});

test("it should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment).toMatchSnapshot();
});
