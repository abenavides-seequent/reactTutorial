import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

interface LetterProps {
  letterPos: number;
  attemptVal: number;
}

const Letter = (props: LetterProps) => {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[props.attemptVal][props.letterPos];

  const correct = correctWord.toUpperCase()[props.letterPos] === letter;
  const almost =
    !correct && letter !== " " && correctWord.toUpperCase().includes(letter);

  const letterState: any =
    currAttempt.attempt > props.attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== " " && !correct && !almost) {
      setDisabledLetters((prev: string[]) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
