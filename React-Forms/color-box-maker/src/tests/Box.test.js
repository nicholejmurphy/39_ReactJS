import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "../Box";
import { v4 as uuid } from "uuid";

test("it renders without crashing", () => {
  render(<Box />);
});

test("it should match snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment).toMatchSnapshot();
});
