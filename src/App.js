import React, { Component } from 'react';
import Cards from './Cards.js';
import './App.css';
// we're making the color-changing squares. I'm catching up!

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards number="100" />
      </div>
    )
  }
}

export default App;
