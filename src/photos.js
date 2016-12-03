import React, { Component } from 'react';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_array: []
    }
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=penguins').then(function(response) {
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
    let photo_array = this.state.photo_array;
    console.log("photo_array in the photoMap: ", photo_array[0]);

    let photo_titles = this.state.photo_array.map((photo, i) => {
      return (
        <div className="container" key={i}>
            <ul><li style={{listStyle: "none"}}>{photo.title} </li></ul>
        </div>
      );
    });
    return photo_titles;
  }

  render() {
    let photo_titles = this.state.photo_titles;
    return(
      <div>
        <h1>Photos List</h1>

        {this.photoMap()}
      </div>

    )
  }
}
