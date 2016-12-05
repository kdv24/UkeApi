import React, { Component } from 'react';
// import style                from './style.js';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_array: [],
      tag: undefined,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=51a81174403dc17c24787f0cce329fef&format=json&nojsoncallback=1&tags=' + this.state.value).then(function(response) {
      return response.json();
    }).then(function(json) {
        this.setState({
          json: json,
          photo_array: json.photos.photo,
        });
    }.bind(this));
    event.preventDefault();
  }

  photoMap() {
    let style = {
      container: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flexStart",
        justifyContent: "center",
      },
      outerContainer: {
        padding: 10,
        display: "flex",
        justifyContent: "spaceAround",

      },
      background: {
        backgroundColor: "blue",
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

    let photo_titles = this.state.photo_array.map((photo, i) => {
      let photo_url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
             '/' + photo.id + '_' + photo.secret + '.jpg';
      return (
        <div key={i} style={[style.outerContainer, style.background]}>
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
        justifyContent: "center",
        padding: 10
      },
      outerContainer: {
        padding: 10,
        display: "flex",
        justifyContent: "spaceAround",
        alignItems: "justifyContent"
      },
      background: {
        backgroundImage: 'url(https://wallpaperscraft.com/image/surface_gray_grid_lines_50488_1600x1200.jpg)',
        backgroundSize: "fixed",
        padding: 20
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
      <div style={style.background}>
        <h1>Photo Wall</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="tags" style={style.button} value={this.state.value} onChange={this.handleChange} placeholder="search tags"></input>
            <input type="submit" value="Submit" style={style.button} />
        </form>
        <div style={style.container}>
            {this.photoMap()}
        </div>
      </div>
    )
  }
}
