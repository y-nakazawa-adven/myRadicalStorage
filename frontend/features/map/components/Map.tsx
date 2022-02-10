import { MAP_API_KEY } from '@lib/utils/const'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Location } from '@features/map/types'

export const Map = () => {
  const center: Location = {
    lat: 35.69575,
    lng: 139.77521,
  }
  const positionAkiba: Location = {
    lat: 35.69731,
    lng: 139.7747,
  }

  const positionIwamotocho: Location = {
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
    <LoadScript googleMapsApiKey={MAP_API_KEY}>
      <GoogleMap mapContainerClassName="w-full h-full" center={center} zoom={15}>
        <Marker position={positionAkiba} label={markerLabelAkiba} />
        <Marker position={positionIwamotocho} label={markerLabelIwamotocho} />
      </GoogleMap>
    </LoadScript>
  )
}
