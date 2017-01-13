import React, { Component } from 'react';
// import style                from './style.js';
// import $                    from 'jquery';
// import xml2js, {parseString}               from 'xml2js';
// var parseString = require('xml2js').parseString;
// import fs                          from 'fs';
import axios from 'axios';


export default class Ukes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ukes_array: [],
    }
  }

  // parseXML(response) {
  //   // let parseString = xml2js.parseString;
  //   let xml = "<root>" + response + "</root>";
  //   parseString(xml, function (err, result) {
  //       console.dir(result);
  //   });
  // }

  tryingAxios(){
    axios.get('https://itunes.apple.com/search?term=fun')  // just to make sure is working
    .then(res => {
      // const chords = res.data.data.children.map(obj => obj.data);
      // this.setState({ chords });
      console.log("axios: ", res); // currently using no cors extension in chrome since api may not have correct header
    });
  }

  getChords(){
    fetch('http://ukulele-chords.com/get?ak=d41d8cd98f00b204e9800998ecf8427e&r=D&typ=major') // or with , {mode: 'no-cors'}
    .then(response => {
      console.log("getChords response: ", response);
      // let parseString = xml2js.parseString;
      // let xml = "<root>" + response + "</root>";
      // parseString(xml, function (err, result) {
      //     result = JSON.stringify(result)
      //     console.dir("getChords: ", result);
      //
      //     var chords = xml.getElementsByTagName("chord");
      //     for(var i = 0; i < chords.length; i++) {
      //         var chord = chord[i];
      //         var chord_name = chord.getElementsByTagName("chord_name");
      //         for(var j = 0; j < chord_name.length; j++) {
      //             alert(chords[j].childNodes[0].nodeValue);
      //         }
      //     }
      //   });
      //   return this.parseXML(response);
    });
  }


  render() {

    return(
      <div>
        <h1>Uke Chords</h1>
        <div>
          <div>
            {this.getChords()}
            {this.tryingAxios()}
          </div>
        </div>
      </div>
    )
  }
}
