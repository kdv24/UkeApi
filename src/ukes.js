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

          var chords = xml.getElementsByTagName("chord");
          for(var i = 0; i < chords.length; i++) {
              var chord = chord[i];
              var chord_name = chord.getElementsByTagName("chord_name");
              // for(var j = 0; j < chord_name.length; j++) {
              //     alert(names[j].childNodes[0].nodeValue);
              // }
          }      });
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
