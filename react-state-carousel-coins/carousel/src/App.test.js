import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// Smoke Test
it("renders without crashing", () => {
  render(<App />);
});

// Snapshot Test
it("should match snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});
