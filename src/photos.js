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
        flexWrap: "wrap",
        alignItems: "flexStart",
        justifyContent: "center"
      },
      outerContainer: {
        padding: 10,
        display: "flex",
        justifyContent: "spaceAround",

      },
      background: {
        backgroundColor: "blue"
      },
      grid: {
        margin: 20,
        padding: 5,
        backgroundColor: "darkGray",
        gridColumn: {
          paddingLeft: 20
        },
        borderColor: "gray",
        borderWidth: 2,
        borderStyle: "solid"
      }
    }
    // let photo_array = this.state.photo_array;
    let photo_titles = this.state.photo_array.map((photo, i) => {
      let photo_url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
             '/' + photo.id + '_' + photo.secret + '.jpg';
      return (
        <div key={i} style={style.outerContainer}>
            <div style={style.grid}>
              <img src={photo_url} alt="pugs" ></img>
              <p>{photo.title}</p>
            </div>
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
        justifyContent: "center"
      },
      outerContainer: {
        padding: 10,
        display: "flex",
        justifyContent: "spaceAround",
        alignItems: "justifyContent"

      },
      background: {
        backgroundColor: "#EBFFFF"
      },
      grid: {
        margin: 20,
        gridColumn: {
          paddingLeft: 20
        }
      },
      button: {
        padding: 10,
        margin: 5,
        borderRadius: 10
      },
      border: {
        borderColor: "gray",
        borderWidth: 2,
        borderStyle: "solid"
      }
    }
    return(
      <div>
        <h1>Photos List</h1>
        <input style={style.button} placeholder="search tags"></input>
        <button style={style.button} type="submit">button here</button>
        <div style={style.container}>
            {this.photoMap()}
        </div>
      </div>
    )
  }
}
