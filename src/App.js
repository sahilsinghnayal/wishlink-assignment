import React from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import Tagged from "./components/Tagged";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Video />
        <Tagged productname={"Tagged Products (3)"} productCount={3} />
        <Tagged productname={"Complete My Look"} productCount={4} />
        <Favorites />
      </div>
    </div>
  );
}

export default App;
