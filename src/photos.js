import React, { Component } from 'react';
// import style                from './style.js';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_array: []
    }
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=pugs').then(function(response) {
      return response.json();
    }).then(function(json) {
        this.setState({
          json: json,
          photo_array: json.photos.photo,
        });
        // this.photoMap();
    }.bind(this));
  }

  photoMap() {
    let style = {
      container: {
        display: "flex",
        flexFlow: "rowWrap",
        alignItems: "flexStart",
        justifyContent: "spaceBetween"
      },
      background: {
        backgroundColor: "#EBFFFF"
      },
      grid: {
        marginLeft: 20,
        gridColumn: {
          paddingLeft: 20
        }
      }
    }
    // let photo_array = this.state.photo_array;
    let photo_titles = this.state.photo_array.map((photo, i) => {
      let photo_url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
             '/' + photo.id + '_' + photo.secret + '.jpg';
      return (
        <div key={i}>
            <div style={style.grid}>{photo.title}<img src={photo_url} alt="pugs" ></img></div>
        </div>
      );
    });
    return photo_titles;
  }

  render() {
    let style = {
      container: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flexStart",
        justifyContent: "spaceBetween"
      },
      background: {
        backgroundColor: "#EBFFFF"
      },
      grid: {
        marginLeft: 20,
        gridColumn: {
          paddingLeft: 20
        }
      }
    }
    return(
      <div>
        <h1>Photos List</h1>
        <div style={style.background, style.container}>
            {this.photoMap()}
        </div>
      </div>
    )
  }
}
