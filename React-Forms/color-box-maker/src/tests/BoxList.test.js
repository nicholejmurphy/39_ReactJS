import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "../BoxList";

function addBox(boxList, height = 100, width = 100, color = "peach") {
  const colorInput = boxList.getByLabelText("Color");
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  fireEvent.change(colorInput, { target: { value: color } });
  fireEvent.change(heightInput, { target: { value: height } });
  fireEvent.change(widthInput, { target: { value: width } });
  const addBtn = boxList.getByText("Add Box");
  fireEvent.click(addBtn);
}

test("it renders without crashing", () => {
  render(<BoxList />);
});

test("it should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment).toMatchSnapshot();
});

test("it should add box", () => {
  const boxList = render(<BoxList />);
  expect(boxList.queryByText("X")).not.toBeInTheDocument();
  addBox(boxList);
  expect(boxList.queryByText("X")).toBeInTheDocument();
});

test("it should remove box", () => {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeBtn = boxList.getByText("X");
  expect(removeBtn).toBeInTheDocument();
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
