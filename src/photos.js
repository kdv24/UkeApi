import React, { Component } from 'react';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentWillMount() {
    this.fetchDemo({
        photos: this.props.photos,
    })
  }


  fetchDemo() {
    let photos;
    let photo_array;
    // let single_photo;
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=penguins').then(function(response) {
      return response.json();
    }).then(function(json) {
      photos = json.photos;
      photo_array  = json.photos.photo;
      // single_photo = json.photos.photo;
      console.log("these are the photos: ", photos);
      console.log("this is an array of photos: ", photo_array);
      console.log("this is a single photo: ", photo_array[0].id);
      return photos;
    });
  }


  render() {
    let all_the_marbles = this.photo_array;
    return (
      <div>
          <div>{all_the_marbles}</div>
      </div>
    );
  }
}
