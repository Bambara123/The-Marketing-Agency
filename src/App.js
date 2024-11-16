import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Services from "./pages/Services/Services";
import Culture from "./pages/Culture/Culture";
import ScrollToTop from "./helperComponents/ScrollToTop";

import HeaderTop from "./components/HeaderTop/HeaderTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <HeaderTop></HeaderTop>
        <Routes>
          <Route path="/The-Marketing-Agency/" element={<Home />} />
          <Route path="/The-Marketing-Agency/work/" element={<Work />} />
          <Route
            path="/The-Marketing-Agency/Services/"
            element={<Services />}
          />
          <Route
            path="/The-Marketing-Agency/Culture/"
            element={<Culture />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
