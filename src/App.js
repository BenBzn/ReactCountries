import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" if the url is not found, redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
      
  );
};

export default App;

