import React, { Component } from 'react';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: {}
    };

    // this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.fetchDemo({
        photos: this.state.photos,
    })
    console.log("in component will mount: ", this.state.photos);

  }

  // onChange() {
  //   let photos = this.state.photos;
  //
  //   this.setState({
  //     photos: photos
  //   });
  //   this.fetchDemo();
  // }


  fetchDemo() {
    let photos;
    let photo_array;
    // let single_photo;
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=penguins').then(function(response) {
      return response.json();
    }).then(function(json) {
      this.setState({
        photos: json.photos,
        photo_array: json.photos.photo
      })
      // single_photo = json.photos.photo;
      console.log("these are the photos: ", photos);
      console.log("this is an array of photos: ", photo_array);
      console.log("this is a single photo: ", photo_array[0].id);
      return photos;
    });
  }

  // photoMap() {
  //
  // }


  render() {
    console.log("this is the photo array state: ", this.state.photos);

    let all_the_marbles = this.state.photo_array.map((photo, index) => {
      let photo_id = this.state.photo.id;
      let photo_title = this.state.photo.title;
    return (
      <div>
        <p>{photo_id}</p>
        <p>{photo_title}</p>
      </div>
    );
  });
  return (
    <div>
      <ul><li>{all_the_marbles}</li></ul>
    </div>
  )
  }
}
