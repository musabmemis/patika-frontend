import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="dark" >
<Button />
      </ThemeContext.Provider >
    </div>
  );
}

export default App;
