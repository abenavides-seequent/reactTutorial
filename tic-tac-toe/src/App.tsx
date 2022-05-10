import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import ThemePicker from './components/ThemePicker';
import { useAppSelector } from './hooks';


function App() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className={`App ` + theme }>
      <ThemePicker />
      <Game />
    </div>
  );



}

export default App;

