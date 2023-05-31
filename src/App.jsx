import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
