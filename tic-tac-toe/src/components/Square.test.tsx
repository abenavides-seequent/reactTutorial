import React from "react";
import { render, screen } from "@testing-library/react";
import Square from "./Square";

test("renders button with an X", () => {
  render(<Square value="X" onClick={() => null} index={1} />);
  const linkElement = screen.getByText(/X/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders button with no text", () => {
  render(<Square value={null} onClick={() => null} index={1} />);
  expect(screen.getByRole("heading", { name: "" })).toBeEmptyDOMElement;
});

// this isn't working properly
test("button with value X is enabled", () => {
  render(<Square value={"X"} onClick={() => null} index={1} />);
  expect(screen.getByTestId("squareButton1")).toBeEnabled;
});
