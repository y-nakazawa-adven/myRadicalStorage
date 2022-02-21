export type PropertyForSearch = {
  name: string
  reviewRate: number
  category: PropertyCategory[]
  tag: PropertyTag[]
  nearbyBuildings: string
  imageUrl: string
}

export type PropertyCategory = 'CITY' | 'STATION'
export type PropertyTag = '' | ''
