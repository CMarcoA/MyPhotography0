import React from "react";
import Homepage from "./Homepage/Homepage.js"; // Correct the path based on where the file is located
import Navbar from "./Navbar/Navbar.js"; // Import the Navbar component
import "./App.css"; // Global styles for the app

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage /> {/* Render the Homepage component */}
    </div>
  );
}

export default App;
