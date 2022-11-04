import React from "react";

import Footer from "./components/Footer";
import Itemlistcontainer from "./components/Itemlistcontainer";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Itemlistcontainer greeting="Hola Gente" />
      <Footer />
    </>
  );
}

export default App;
