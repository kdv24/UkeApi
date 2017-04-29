import React, { Component } from 'react';
import Style                from './style.js';
var Spotify = require('spotify-web-api-js');
var s = new Spotify();
//s.searchTracks()...
console.log(s);

export default class MySpotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAccessToken: "",
      // tag: undefined,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  loadStuff() {
      fetch("https://accounts.spotify.com").then(function(response){
          console.log("response: ", response);
      });
  }


  handleSubmit(event) {
    // let base_URL = "https://accounts.spotify.com"
    alert("in the handle submit", this.state);
    fetch("https://accounts.spotify.com/authorize?client_id=405bda0620524d66af7349d0245a73c3&response_type=token&redirect_uri=http://localhost:3000/callback").then(function(response) {
      alert("response: ", response)
      return response.json();
    }).then(function(json) {
      console.log(json);
    })
  }


render(){
  let style = Style;
  return(
    <div style={style.background}>
    {this.loadStuff()}
      <h1 >Spotify Sptuff</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="title"
          style={style.button}
          defaultValue={this.state.value}
          onChange={this.handleChange}
          placeholder="song title"
        />
        <input
          type="text"
          id="artist"
          style={style.button}
          defaultValue={this.state.value}
          onChange={this.handleChange}
          placeholder="artist name"
        />
        <input
          type="submit"
          value="Submit"
          style={style.button}
        />
      </form>
    </div>
  )
}
}
