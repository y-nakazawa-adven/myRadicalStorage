/**
 * https://react-google-maps-api-docs.netlify.app/
 */

import { MAP_API_KEY } from '@libs/utils/const'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Geo } from '@libs/utils/types'

export const Map = () => {
  const center: Geo = {
    lat: 35.69575,
    lng: 139.77521,
  }
  const positionAkiba: Geo = {
    lat: 35.69731,
    lng: 139.7747,
  }

  const positionIwamotocho: Geo = {
    lat: 35.69397,
    lng: 139.7762,
  }
  const markerLabelAkiba = {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    fontWeight: '100',
    text: '1',
  }

  const markerLabelIwamotocho = {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    fontWeight: '100',
    text: '2',
  }

  return (
    // <LoadScript googleMapsApiKey={MAP_API_KEY}>
    //   <GoogleMap mapContainerClassName="w-full h-full" center={center} zoom={15}>
    //     <Marker position={positionAkiba} label={markerLabelAkiba} />
    //     <Marker position={positionIwamotocho} label={markerLabelIwamotocho} />
    //   </GoogleMap>
    // </LoadScript>
    <div></div>
  )
}
