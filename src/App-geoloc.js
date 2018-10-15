import React, { Component } from 'react';

import './App.css';
import Geolocation from 'react-geolocation';

const usersMarkerDefault = {
  center: [43.6036786, 1.4328012],
  zoom: 15
};

class App extends Component {

  // const divContent = error 
  //   ?
  //     <div>
  //       <div>{error.message}</div>
  //       latitude: {mapConfig.center[0]}
  //       longitude: {mapConfig.center[1]}
  //     </div> 
  //   :
  //     <pre>
  //       latitude: {latitude}
  //       longitude: {longitude}
  //     </pre> 
      
  render() { 
    let [defaultLongUser,defaultLatUser] = usersMarkerDefault.center;
    return (
      <div className="App">
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) =>
            <div>
              {/* <button onClick={getCurrentPosition}>Get Position</button> */}
              {error ?
                <div>
                  <div>{error.message}</div>
                  latitude: {defaultLongUser}
                  longitude: {defaultLatUser}
                </div> 
                    :
                <pre>

                  latitude: {latitude}
                  longitude: {longitude}
                </pre>
              }             
            </div>}
        />
      </div>
    );
  }
}

export default App;
