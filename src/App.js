import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    var mine = document.querySelector('p');

    fetch('http://ukulele-chords.com/get?ak=d41d8cd98f00b204e9800998ecf8427e&r=D&typ=major', {mode: 'no-cors'})
    .then(function(response) {
        alert(response);
    })
    .then(function() {
      alert("in the promise?");
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {mine}
        </p>
      </div>
    );
  }
}

export default App;
