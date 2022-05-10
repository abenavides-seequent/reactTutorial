import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

// import React from "react";
// import { useState } from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import "./index.css";
// import { Typography } from "@mui/material";

// //reusable type for valid square states
// type ValidSquare = "X" | "O" | null;

// //helper function
// //moved to the top because it's a functional component rather than a class
// const calculateWinner = (squares: ValidSquare[]): ValidSquare => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };

// interface SquareProps {
//   onClick(): void;
//   value: ValidSquare;
// }

// //clickable button inside square displays current cell value (X, O , null)
// //called by Board function
// const Square: React.FC<SquareProps> = (props) => {
//   return (
//     <button className="square" onClick={props.onClick}>
//       <Typography variant="h1">{props.value}</Typography>
//     </button>
//   );
// };

// interface BoardProps {
//   onClick(i: number): void;
//   squares: ValidSquare[];
// }

// //board function renders entire board
// const Board: React.FC<BoardProps> = (props) => {
//   const renderSquare = (i: number) => {
//     return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
//   };
//   return (
//     <div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   );
// };

// //game function controls game mechanics
// const Game: React.FC = () => {
//   let isTie = false;
//   const [xIsNext, setXIsNext] = useState<boolean>(true); //controls who's turn it is
//   const [stepNumber, setStepNumber] = useState<number>(0); //controls the number of turns taken
//   const [history, setHistory] = useState<{ squares: ValidSquare[] }[]>([
//     //controls previous board placements
//     {
//       squares: Array(9).fill(null),
//     },
//   ]);

//   const handleClick = (i: number): void => {
//     const newHistory = history.slice(0, stepNumber + 1); //makes a copy of history to for immutability
//     const current = newHistory[newHistory.length - 1]; //current board history
//     const squares = current.squares.slice(); //

//     if (calculateWinner(squares) || squares[i]) {
//       //returns if a winner is declared or if board is full
//       return;
//     }
//     squares[i] = xIsNext ? "X" : "O"; //sets square to current player symbol
//     setHistory(
//       newHistory.concat([
//         //uses concat instead of push to not mutate the original array
//         {
//           squares: squares,
//         },
//       ])
//     );
//     setStepNumber(newHistory.length); //changes the number of turns taken to reflect the length of the array
//     setXIsNext(!xIsNext); //changes who's turn it is
//   };

//   const jumpTo = (step: number): void => {
//     //function changes the turn number and the next player
//     setStepNumber(step);
//     setXIsNext(step % 2 === 0);
//   };

//   const current = history[stepNumber];
//   const winner = calculateWinner(current.squares);

//   const moves = history.map((step, move) => {
//     //maps all existing moves for user to jump through
//     const desc = move ? "Go to move #" + move : "Go to game start";
//     return (
//       <li key={move}>
//         <Button
//           className="goToMove"
//           variant="contained"
//           onClick={() => jumpTo(move)}
//         >
//           {desc}
//         </Button>
//       </li>
//     );
//   });

//   let status; //let -> variable may be reassigned
//   if (winner) {
//     //displays winner or next turn
//     status = "Winner: " + winner + "!";
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <div className="game">
//       <div className="game-status">
//         <Typography variant="h3" color="#b8b7ff" align="center">
//           {status}
//         </Typography>
//       </div>
//       <div className="game-parts">
//         <div className="game-board">
//           <Board squares={current.squares} onClick={(i) => handleClick(i)} />
//         </div>
//         <div className="game-info">
//           <Typography variant="h4" color="#b8b7ff" align="center">
//             Game History
//           </Typography>
//           <Typography variant="h5" color="#b8b7ff">
//             <ol>{moves}</ol>
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<Game />, document.getElementById("root"));

