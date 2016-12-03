import React, { Component } from 'react';
import logo from './logo.svg';
import Photos from './photos.js';
import './App.css';

class App extends Component {

  render() {

    fetch('http://ukulele-chords.com/get?ak=d41d8cd98f00b204e9800998ecf8427e&r=D&typ=major', {mode: 'no-cors'})
    .then(function(response) {
        // console.log("in the fetch: ", response);
    })
    .then(function() {
      // console.log("in the promise");
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          on app.js page
        </p>
        <Photos/>
      </div>
    );
  }
}

export default App;
