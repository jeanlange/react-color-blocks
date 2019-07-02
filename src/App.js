import React, { Component } from 'react';
import Cards from './Cards.js';
import './App.css';
// we're making the color-changing squares. I'm catching up!

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards number="16" />
        <Cards number="100" />
        <Cards number="100" dimension="40vh" />
        <Cards number="100" dimension="10vh" />
        <Cards number="100" />
        <Cards number="36" dimension="30vh" />
        <Cards number="100" />
        <Cards number="100" />
        <Cards number="100" dimension="5vh" />
        <Cards number="1" dimension="5vh" />
        <Cards number="4" dimension="5vh" />
        <Cards number="100" />
        <Cards number="16" dimension="15vh" />
      </div>
    )
  }
}

export default App;
