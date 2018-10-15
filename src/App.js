import React, { Component } from 'react';

import { Map, TileLayer,  Marker, Popup } from 'react-leaflet';

import Geolocation from 'react-geolocation';

const usersMarkerDefault = {
  center: [43.599927, 1.443197],
  zoom: 15
};

class App extends Component {

  render() {
    let [defaultLatUser,defaultLongUser] = usersMarkerDefault.center;
    const position = [51.505, -0.09];
    return (
      <div className="App">
          <Map center={position} zoom={13} className="map__reactleaflet">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
      </div>
    );
  }
}

export default App;