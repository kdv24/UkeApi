import React, { Component } from 'react';
// import style                from './style.js';
// import $                    from 'jquery';
import xml2js               from 'xml2js';


export default class Ukes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ukes_array: [],
    }
  }
  // parseXML(response) {
  //   let parseString = xml2js.parseString;
  //   let xml = "<root>" + response + "</root>";
  //   parseString(xml, function (err, result) {
  //       console.dir(result);
  //   });
  // }

  getChords(){
    fetch('http://ukulele-chords.com/get?ak=d41d8cd98f00b204e9800998ecf8427e&r=D&typ=major', {mode: 'no-cors'})
    .then(function(response) {
      let parseString = xml2js.parseString;
      let xml = "<root>" + response + "</root>";
      parseString(xml, function (err, result) {
          console.dir(result);
      });
        // return this.parseXML(response);
    });
  }


  render() {

    return(
      <div>
        <h1>Uke Chords</h1>
        <div>
          <div>
            {this.getChords()}
          </div>
        </div>
      </div>
    )
  }
}
