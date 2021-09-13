import React from "react";
import About from "./Components/About";
import Agent from "./Components/Agent";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Howitworks from "./Components/Howitworks";
import Property from "./Components/Property";
import './index.css';




function App() {
  
    return (
      <div className="App">
        <Header />
        <Howitworks />
        <About/>
        <Agent/>
        <Property/>
        <Contact />
      </div>
     
    );
  }

export default App; 