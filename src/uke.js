import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Uke extends Component {

  let api_url = 'http://www.ukulele-chords.com/get?ak=d41d8cd98f00b204e9800998ecf8427e&r=C&typ=major';
  //converts the specified XML file into a SimpleXMLElement object
  var xml = simplexml_load_file($api_url);
  //Navigate through the tree to get your info (chord diagram here)
  //chord[0] returns the "main chord". For alternative positions, use a foreach() loop.
  var res = $xml.chord[0].chord_diag_mini;
  //print the result
  var chord_pic = '<img src="'. res .'" alt="" width="90" height="130" />';

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Uke;
