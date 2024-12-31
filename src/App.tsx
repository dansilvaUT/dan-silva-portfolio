import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dan-silva-portfolio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
