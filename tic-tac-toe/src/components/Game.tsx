import React from 'react'
import {useState} from 'react'
import Board from './Board'
import { Button, Typography } from '@mui/material'
import CalculateWinner from '../features/CalculateWinner'
import './Game.css'


type ValidSquare = 'X' | 'O' | null;

//game function controls game mechanics
const Game: React.FC = () => {
  let isTie = false;
  const [xIsNext, setXIsNext] = useState<boolean>(true); //controls who's turn it is
  const [stepNumber, setStepNumber] = useState<number>(0); //controls the number of turns taken
  const [history, setHistory] = useState<{ squares: ValidSquare[] }[]>([
    //controls previous board placements
    {
      squares: Array(9).fill(null),
    },
  ]);

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1); //makes a copy of history to for immutability
    const current = newHistory[newHistory.length - 1]; //current board history
    const squares = current.squares.slice(); //

    if (CalculateWinner(squares) || squares[i]) {
      //returns if a winner is declared or if board is full
      return;
    }
    squares[i] = xIsNext ? "X" : "O"; //sets square to current player symbol
    setHistory(
      newHistory.concat([
        //uses concat instead of push to not mutate the original array
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(newHistory.length); //changes the number of turns taken to reflect the length of the array
    setXIsNext(!xIsNext); //changes who's turn it is
  };

  const jumpTo = (step: number): void => {
    //function changes the turn number and the next player
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = CalculateWinner(current.squares);

  const moves = history.map((step, move) => {
    //maps all existing moves for user to jump through
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <Button
          className="goToMove"
          variant="contained"
          onClick={() => jumpTo(move)}
        >
          {desc}
        </Button>
      </li>
    );
  });

  let status; //let -> variable may be reassigned
  if (winner) {
    //displays winner or next turn
    status = "Winner: " + winner + "!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-status">
        <Typography variant="h3" color="#6c6aec" align="center">
          {status}
        </Typography>
      </div>
      <div className="game-parts">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <Typography variant="h4" color="#6c6aec" align="center">
            Game History
          </Typography>
          <Typography variant="h5" color="#6c6aec">
            <ol>{moves}</ol>
          </Typography>
        </div>
      </div>
    </div>
  );
};



export default Game
