import React, { Component } from 'react';
import logo     from './logo.svg';
import Photos   from './photos.js';
import Ukes     from  './ukes.js';
import './App.css';

class App extends Component {


  render() {

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
        <Ukes />
      </div>
    );
  }
}

export default App;
