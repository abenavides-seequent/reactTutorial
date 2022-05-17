import React, { useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { defaultBoard, generateWordSet } from "./Words";
import { useState } from "react";
import { createContext } from "react";
import GameOver from "./components/GameOver";
import { Typography } from "@mui/material";

interface AppContextInterface {
  board: string[][];
  setBoard: Function;
  currAttempt: {
    attempt: number;
    letterPos: number;
  };
  setCurrAttempt: Function;
  onSelectLetter: Function;
  onDelete: Function;
  onEnter: Function;
  correctWord: String;
  disabledLetters: String[];
  setDisabledLetters: Function;
  gameOver: {
    gameOver: boolean;
    guessedWord: boolean;
  };
  setGameOver: Function;
}

export const AppContext = createContext<AppContextInterface>({
  board: defaultBoard,
  setBoard: () => {},
  currAttempt: { attempt: 0, letterPos: 0 },
  setCurrAttempt: () => {},
  onSelectLetter: () => {},
  onDelete: () => {},
  onEnter: () => {},
  correctWord: " ",
  disabledLetters: [],
  setDisabledLetters: () => {},
  gameOver: { gameOver: false, guessedWord: false },
  setGameOver: () => {},
});

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState(" ");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words: any) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onSelectLetter = (keyVal: string) => {
    if (currAttempt.letterPos < 5) {
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({
        ...currAttempt,
        letterPos: currAttempt.letterPos + 1,
      });
    }
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = " ";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Found");
    }

    if (currWord.toLowerCase() === correctWord) {
      alert("You Win!");
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  return (
    <div className="App">
      <nav>
        <Typography variant="h4">Wordle</Typography>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
