import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
     <div className="container">
      <Navbar/>
      <Video/>
     </div>
    </div>
  );
}

export default App;
