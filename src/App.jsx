import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Peralatan from "./Page/Peralatan";
import Home from "./Page/Home";
import About from "./Page/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/peralatan" element={<Peralatan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
