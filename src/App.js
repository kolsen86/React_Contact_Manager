import React, { Component } from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
                <Contact
                    name="Kenneth Olsen"
                    email="olsenkenneth1986@gmail.com"
                    phone="313-247-0516"
                />

                <Contact
                    name="Turd Bomber"
                    email="bringthebrown@gmail.com"
                    phone="313-247-brown"
                />
            </div>
        </div>
    );
  }
}

export default App;
