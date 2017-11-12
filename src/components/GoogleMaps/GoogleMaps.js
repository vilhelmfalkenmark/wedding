import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { styles } from "./GoogleMapsStyles.js";

const GoogleMaps = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      apiKey={"AIzaSyC2vvL4RqLyLTIwBZ0xiIHXdvEiz7h_PJA"}
      defaultCenter={{ lat: 59.363598, lng: 18.074851 }}
      defaultOptions={{
        scrollwheel: false,
        styles: styles
      }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 59.363598, lng: 18.074851 }} />
      )}
    </GoogleMap>
  ))
);

export default GoogleMaps;
