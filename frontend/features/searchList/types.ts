export type PropertyForSearch = {
  objectID: string
  name: string
  reviewRate: number
  category: PropertyCategory
  baseInfo: string[]
  nearest: string
  imageUrl: string
  _geoloc: {
    lat: number
    lng: number
  }
}

export type PropertyCategory = 'CITY' | 'STATION'
