import React from 'react'
import Square from './Square'
import './Board.css'

type ValidSquare = 'X' | 'O' | null;

interface BoardProps {
  onClick(i: number): void;
  squares: ValidSquare[];
}

//board function renders entire board
const Board: React.FC<BoardProps> = (props) => {
  const renderSquare = (i: number) => {
    return <Square  value={props.squares[i]}  onClick={() => props.onClick(i)} index={i} />;
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