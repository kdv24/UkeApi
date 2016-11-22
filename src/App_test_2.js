import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chords: []
    };

  }

  componentDidMount(){
    axios.get('http://ukulele-chords.com/get?ak=d41d8cd98f00b204e9800998ecf8427e&r=D&typ=major', {mode: 'no-cors'})
    .then(res => {
      const chords = res.data.data.children.map(obj => obj.data);
      this.setState({ chords });
      console.log(this);
    });
  }
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
        <ul>
          {this.state.chords.map(post =>
          <li key={chord.id}>{chord_name}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render (<App/>, document.getElementById('root'));
