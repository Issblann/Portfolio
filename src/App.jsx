import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          {/* <Route path="/About" element={<Experience />} /> */}
          {/* <Route path="/" element={<Work />} /> */}
        </Routes>
        <Work />
      </main>
    </BrowserRouter>
  );
}

export default App;
