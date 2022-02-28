/**
 * https://react-google-maps-api-docs.netlify.app/
 */

import { MAP_API_KEY } from '@libs/utils/const'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Geo } from '@libs/utils/types'
import { PropertyForSearch, SearchPropertiesAction } from '@features/searchList'
import { Dispatch } from 'react'
import { SearchInput } from '@features/searchBar'

type Props = {
  query: SearchInput
  properties: PropertyForSearch[]
  dispatch: Dispatch<SearchPropertiesAction>
}
export const Map = ({ query, properties }: Props) => {
  console.log(properties)
  const getCenter = (): Geo => {
    if (!!query._geoloc.lat && !!query._geoloc.lng) {
      return {
        lat: query._geoloc.lat,
        lng: query._geoloc.lng,
      }
    }
    if (properties.length > 0) {
      return {
        lat: properties[0]._geoloc.lat,
        lng: properties[0]._geoloc.lng,
      }
    }
    return {
      lat: 35.69575,
      lng: 139.77521,
    }
  }

  return (
    <>
      {properties.length > 0 ? (
        <LoadScript googleMapsApiKey={MAP_API_KEY}>
          <GoogleMap mapContainerClassName="w-full h-full" center={getCenter()} zoom={15}>
            {properties.map((property: PropertyForSearch, index: number) => (
              <Marker
                position={{ ...property._geoloc }}
                label={{
                  color: 'white',
                  fontFamily: 'sans-serif',
                  fontSize: '15px',
                  fontWeight: '100',
                  text: `${index + 1}`,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      ) : (
        <div>NG!!</div>
      )}
    </>
  )
}
