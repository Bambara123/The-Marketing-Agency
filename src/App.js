import "./App.css";
import colors from "./config/colors";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <div className="zen-antque-regular" style={{ color: colors.green }}>
        This is ultra
      </div>

      <div className="red-hat-text">This is ultra</div>
    </div>
  );
}

export default App;
