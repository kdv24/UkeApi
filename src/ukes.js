import React, { Component } from 'react';
// import style                from './style.js';
// import $                    from 'jquery';
// import xml2js               from 'xml2js';
// import parser             from 'xml2json';


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
  //       console.log(parseString);
  //   });
  // }

///////////  JUST ADDED NEW NPM PACKAGE TO TRY  //////////////

  // let xml = "<foo attr=\"value\">bar</foo>";
  // console.log("input -> %s", xml)
  //
  // // xml to json
  // var json = parser.toJson(xml);
  // console.log("to json -> %s", json);
  //
  // // json to xml
  // var xml = parser.toXml(json);
  // console.log("back to xml -> %s", xml)
/////////////////////////////////////////////

  getChords(){
    fetch('http://localhost:4567/chords')
    .then(function(response) {
      console.log("response: ", response);

      // let parseString = xml2js.parseString;
      // let xml = "<root>" + response + "</root>";
      // parseString(xml, function (err, result) {
      //     console.log(result);
      //
      //     var chords = xml.getElementsByTagName("chord");
      //     for(var i = 0; i < chords.length; i++) {
      //         var chord = chord[i];
      //         var chord_name = chord.getElementsByTagName("chord_name");
      //         for(var j = 0; j < chord_name.length; j++) {
      //             alert(chord_name[j].childNodes[0].nodeValue);
      //         }
      //     }
      //   });
        // console.log(xml);
        // return this.parseXML(response);
    })
    .then(function(ukeData) {
      console.log("ukeData", ukeData);
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
