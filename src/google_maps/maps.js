import React, { Component } from 'react';
// import CreateHistory        from 'history';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Style                from './style.js';


  // key=AIzaSyCc_SQsYcVvJg70jkcOQeTLr2V9TjhjuK4

  export class MapContainer extends Component {

  render() {
    let style = Style;
      return (
        <div classname={style.backgroundColor}>
          <h2>Playing with Google Maps API</h2>
          <Map
            google={this.props.google}
            zoom={2}
            style={style}
            initialCenter={{
              lat: 10.0,
              lng: -150
            }}
            onClick={this.onMapClicked}
          >
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
          </Map>
        </div>

      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCc_SQsYcVvJg70jkcOQeTLr2V9TjhjuK4'
  })(MapContainer)
