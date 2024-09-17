import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Work from "./pages/Work/Work";
import Home from "./pages/Home/Home";
import HeaderTop from "./components/HeaderTop/HeaderTop";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop></HeaderTop>
        <Routes>
          <Route path="/The-Marketing-Agency/" element={<Home />} />
          <Route path="/The-Marketing-Agency/work/" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
