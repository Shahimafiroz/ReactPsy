import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components /Home";
import About from "./components /About";
import Navbar from "./components /Navbar";
import PageNotFOund from "./components /PageNotFOund";
import Redirected from "./components /Redirected";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}> This is from the app component</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redi" element={<Redirected />} />
          <Route path="/*" element={<PageNotFOund />} />
          {/* <Route path="/*" element={<Navigate to="/redi" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
