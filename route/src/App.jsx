import React from "react";
import {Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css"


function App() {
  return (
    <Router>
      <>
        <div>
          
          <nav>
            
            <ul>
              
              <li>
                <Link to="/">Kalvium ❤️</Link>
              </li>
              <div className="last">
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              </div>
            
            </ul>
          
          </nav>
        
        </div>
        
        
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>  
          
                

      </>
    </Router>
  );
}


export default App;