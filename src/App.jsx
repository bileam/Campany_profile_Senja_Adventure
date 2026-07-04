import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Peralatan from "./Page/Peralatan";
import Home from "./Page/Home";
import About from "./Page/About";
import Galery from "./Page/Galery";
import Cart from "./Page/Cart";
import Contact from "./Page/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/peralatan" element={<Peralatan />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kontak" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
