import React from 'react'
import ValidSquare from '../App'
import Typography from '@mui/material/Typography'
import './Square.css'

type ValidSquare = 'X' | 'O' | null;

interface SquareProps {
  onClick(): void;
  value: ValidSquare;
  winnerClass: string;
}

//clickable button inside square displays current cell value (X, O , null)
//called by Board function
const Square: React.FC<SquareProps> = (props) => {
  return (
    <button className={`square ` + props.winnerClass} onClick={props.onClick}>
      <Typography variant="h1">{props.value}</Typography>
    </button>
  );
};

export default Square