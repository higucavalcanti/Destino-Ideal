import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './maps.css'

export interface MapPageProps{}

export const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBVkiB7INoUZlg49knIK1azwzY6Jcdg36c"
      })

    return <div className="map">
        {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%' }}
        center={{lat: -8.278537, lng: -35.981223}}
        zoom={13}
      ></GoogleMap>
  ) : <></>}
    </div>;
};