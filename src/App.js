import React, { Component } from 'react';
import Contact from "./components/Contact";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Turd Bomber</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
