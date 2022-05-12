import "./App.css";
import Game from "./components/Game";
import ThemePicker from "./components/ThemePicker";
import { useAppSelector } from "./app/hooks";

function App() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className={`App ` + theme}>
      <ThemePicker />
      <Game />
    </div>
  );
}

export default App;
