import React, { Component } from 'react';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }


  fetchDemo() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=penguins').then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json.photos);
      return json.photos;
    });
  }


  render() {
    var fetchDemo = this.fetchDemo();
    return (
      <div>
        <p>hi</p>
          <div><p>{fetchDemo}</p></div>
      </div>
    );
  }
}
