import React, { Component } from 'react';

import { Map, TileLayer,  Marker, Popup } from 'react-leaflet';

import Geolocation from 'react-geolocation';



const usersMarkerDefault = {
  center: [43.599927, 1.443197],
  zoom: 15
};


class MapLeaflet extends Component {

  render() {
    let [defaultLatUser,defaultLongUser] = usersMarkerDefault.center;
    return (
      <div className="map ">
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => 
            {
                if(!latitude || !longitude) {
                  latitude = defaultLatUser;
                  longitude = defaultLongUser;
                }
              return (
                  <Map center={[latitude,longitude]} zoom={usersMarkerDefault.zoom} className="map__reactleaflet">
                    <TileLayer
                      url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                    />

                    <Marker position={[latitude, longitude]} >
                      <Popup>
                        <span>USER</span>
                      </Popup>
                    </Marker>
                  </Map>
              )
            }
          }
        />

      </div>
    );
  }
}

export default MapLeaflet;