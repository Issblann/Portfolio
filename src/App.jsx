import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aboutme from "./components/Aboutme/Aboutme";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Aboutme />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
