import React from "react";
import ValidSquare from "../App";
import Typography from "@mui/material/Typography";
import "./Square.css";

type ValidSquare = "X" | "O" | null;

interface SquareProps {
  onClick(): void;
  value: ValidSquare;
  index: number;
}

//clickable button inside square displays current cell value (X, O , null)
//called by Board function
const Square: React.FC<SquareProps> = (props) => {
  return (
    <button
      data-testid={`squareButton` + props.index}
      className="square"
      onClick={props.onClick}
    >
      <Typography variant="h1">{props.value}</Typography>
    </button>
  );
};

export default Square;
