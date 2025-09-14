// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Header"; // Assuming the Navbar is in the components folder
import Home from './page/Home';      // Hero section


function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* Routes for different sections */}
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
