import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

const cardData = {
  src: image1,
  caption: "Photo by Richard Pasquarella on Unsplash",
};

// Smoke Test
it("should render without crashing", () => {
  render(
    <Card
      caption={cardData.caption}
      src={cardData.src}
      currNum={1}
      totalNum={1}
    />
  );
});

// Snapshot Test
it("should match snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment).toMatchSnapshot();
});
