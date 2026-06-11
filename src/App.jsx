import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Peralatan from "./Page/Peralatan";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/peralatan" element={<Peralatan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
