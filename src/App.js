import React from "react";
import Homepage from "./Homepage/Homepage.js"; // Correct the path based on where the file is located
import Navbar from "./Navbar/Navbar.js"; // Import the Navbar component
import Gallery from "./Gallery/Gallery.js"; // Import the Gallery component
import GalleryDetail from "./Gallery/GalleryDetail"; // Import the new GalleryDetail component
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
