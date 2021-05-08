import logo from './logo.svg';
import React from 'react';
import './App.css';
import MediaCard from "./profile_card";

function App() {
  return (
    <div className="App">
      <div> 
        { MediaCard() }
      </div>
    </div>
  );
}

export default App;

