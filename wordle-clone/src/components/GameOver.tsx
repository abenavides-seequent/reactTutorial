import React, { useContext } from "react";
import { AppContext } from "../App";
import { Button, Typography } from "@mui/material";

const GameOver = () => {
  const { gameOver, setGameOver, currAttempt, correctWord } =
    useContext(AppContext);

  return (
    <div className="gameOver">
      <Typography variant="h5" className="gameOverText">
        {" "}
        {gameOver.guessedWord
          ? "You guessed correctly!"
          : "Sorry, you didn't guess correctly"}{" "}
      </Typography>
      <Typography variant="h5" className="gameOverText">
        {" "}
        The Correct Word: {correctWord.toUpperCase()}
      </Typography>
      {gameOver.guessedWord && (
        <Typography variant="h5" className="gameOverText">
          You guessed in {currAttempt.attempt} attempts
        </Typography>
      )}
      <Button
        variant="contained"
        color="success"
        onClick={() => window.location.reload()}
      >
        <Typography variant="h6">Restart Game</Typography>
      </Button>
    </div>
  );
};

export default GameOver;
