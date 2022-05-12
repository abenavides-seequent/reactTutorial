import { render, screen } from "@testing-library/react";
import Game from "./Game";
import userEvent from "@testing-library/user-event";

test("renders player status", () => {
  render(<Game />);
  const statusElement = screen.getByText(/Next player:/);
  expect(statusElement).toBeInTheDocument();
});

test("renders game history header", () => {
  render(<Game />);
  const statusElement = screen.getByText(/Game History/);
  expect(statusElement).toBeInTheDocument();
});

test("renders game board", () => {
  render(<Game />);
  userEvent.click(screen.getByTestId("squareButton1"));
  const square1Value = screen.getByRole("button", { name: /X/ });
  expect(square1Value).toBeInTheDocument();
});

test("next player is O", () => {
  render(<Game />);
  userEvent.click(screen.getByTestId("squareButton0"));
  const winnerStatus = screen.getByText(/Next player: O/);
  expect(winnerStatus).toBeInTheDocument();
});

test("next player is X", () => {
  render(<Game />);
  const winnerStatus = screen.getByText(/Next player: X/);
  expect(winnerStatus).toBeInTheDocument();
});

test("x wins the game", () => {
  render(<Game />);
  userEvent.click(screen.getByTestId("squareButton0"));
  userEvent.click(screen.getByTestId("squareButton8"));
  userEvent.click(screen.getByTestId("squareButton1"));
  userEvent.click(screen.getByTestId("squareButton4"));
  userEvent.click(screen.getByTestId("squareButton2"));
  const winnerStatus = screen.getByText(/Winner: X!/);
  expect(winnerStatus).toBeInTheDocument();
});

test("tied game", () => {
  render(<Game />);
  userEvent.click(screen.getByTestId("squareButton0"));
  userEvent.click(screen.getByTestId("squareButton1"));
  userEvent.click(screen.getByTestId("squareButton2"));
  userEvent.click(screen.getByTestId("squareButton3"));
  userEvent.click(screen.getByTestId("squareButton4"));
  userEvent.click(screen.getByTestId("squareButton6"));
  userEvent.click(screen.getByTestId("squareButton5"));
  userEvent.click(screen.getByTestId("squareButton8"));
  userEvent.click(screen.getByTestId("squareButton7"));
  const tieStatus = screen.getByText(/It's A Tie!/);
  expect(tieStatus).toBeInTheDocument();
});

test("go to move #1 after 3 moves where square 1 will be empty", () => {
  render(<Game />);
  userEvent.click(screen.getByTestId("squareButton0"));
  userEvent.click(screen.getByTestId("squareButton1"));
  userEvent.click(screen.getByTestId("squareButton2"));
  userEvent.click(screen.getByRole("button", { name: "Go to move #1" }));
  const button1Status = screen.getByTestId("squareButton1");
  expect(button1Status).toBeEmptyDOMElement;
});

test("go to move #1 after 3 moves and then alter the board", () => {
  render(<Game />);
  userEvent.click(screen.getByTestId("squareButton0"));
  userEvent.click(screen.getByTestId("squareButton1"));
  userEvent.click(screen.getByTestId("squareButton2"));
  userEvent.click(screen.getByRole("button", { name: "Go to move #1" }));
  userEvent.click(screen.getByTestId("squareButton8"));
  const button3Status = screen.queryByRole("button", { name: "Go to move #3" });
  expect(button3Status).not.toBeInTheDocument;
});
