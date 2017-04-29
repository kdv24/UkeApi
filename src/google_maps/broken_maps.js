import React, { Component } from 'react';
import Style                from './style.js';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // getAccessToken: "",
      // // tag: undefined,
      // value: ''
    }
  }

  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCc_SQsYcVvJg70jkcOQeTLr2V9TjhjuK4&callback=initMap')
  }

  initMap(){
    let uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(this.refs.map.getDOMNode('map'), {
      zoom: 4,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  render(){
    let style=Style;

    return (
      <div className={style.container} ref="map">
      </div>
    )
  }
}
