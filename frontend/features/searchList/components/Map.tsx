/**
 * https://react-google-maps-api-docs.netlify.app/
 */

import { MAP_API_KEY } from '@libs/utils/const'
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api'
import { Geo } from '@libs/utils/types'
import { PropertyForSearch, SearchPropertiesAction } from '@features/searchList'
import { Dispatch, memo } from 'react'
import { SearchInput } from '@features/searchBar'

type Props = {
  query: SearchInput
  properties: PropertyForSearch[]
  dispatch: Dispatch<SearchPropertiesAction>
}
export const Map = memo(({ query, properties }: Props) => {
  // 以下バグ対策
  // You have included the Google Maps JavaScript API multiple times on this page. This may cause unexpected errors.
  // @react-google-maps/apiのもとになったソースのPR。解決せずに終わってる感
  // https://github.com/tomchentw/react-google-maps/issues/812
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
  })
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
      {isLoaded ? (
        <GoogleMap mapContainerClassName="w-full h-full" center={getCenter()} zoom={15}>
          {properties.length > 0 &&
            properties.map((property: PropertyForSearch, index: number) => (
              <Marker
                key={`marker-${index}`}
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
      ) : (
        <div>ロード中</div>
      )}
    </>
  )
})
