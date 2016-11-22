import React, { Component } from 'react';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }


  function fetchDemo() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=penguins').then(function(response) {
      return response.json();
    }).then(function(json) {
      insertPhotos(json);
    });
  }



  render() {

    return (
      <div>
        <p>hi</p>
          fetchDemo();
      </div>
    );
  }
}
