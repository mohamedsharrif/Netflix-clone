import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pajes/Signup";
import Home from "./pajes/Home";
import List from "./pajes/List";
import Login from "./pajes/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
