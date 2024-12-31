import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dan-silva-portfolio" element={<Home />} />
        <Route path="/dan-silva-portfolio/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
