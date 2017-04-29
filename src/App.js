import React, { Component } from 'react';
import logo     from './logo.svg';
import Photos   from './photos/photos.js';
// import Ukes     from  './ukes.js';
// import MySpotify  from './spotify/myspotify.js';
import Maps       from './google_maps/maps.js';
import './App.css';

export default class App extends Component {


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
        <Maps/>
        <Photos/>
        {/* <MySpotify/> */}
        {/* <Ukes /> */}
      </div>
    );
  }
}
