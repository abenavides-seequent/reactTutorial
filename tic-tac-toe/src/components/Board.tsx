import React from 'react'
import Square from './Square'
import { useAppSelector } from '../app/hooks'
import './Board.css'

type ValidSquare = 'X' | 'O' | null;

interface BoardProps {
  onClick(i: number): void;
  squares: ValidSquare[];
}

//board function renders entire board
const Board: React.FC<BoardProps> = (props) => {

  const winningSquareA = useAppSelector((state) => state.winning.squareA)
  const winningSquareB = useAppSelector((state) => state.winning.squareB)
  const winningSquareC = useAppSelector((state) => state.winning.squareC)

  

  const renderSquare = (i: number) => {
    let winClass = ''
    if(i === winningSquareA || i === winningSquareB || i === winningSquareC){
      winClass = 'win'
    }

    return (
      <Square value={props.squares[i]}  onClick={() => props.onClick(i)}  winnerClass={winClass} />
    )
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board