import { Geo } from '@lib/utils/types'

export type SearchQuery = { objectID: string; location: string; address: string; _geoloc: Geo }

export type SearchInput = SearchQuery & {
  checkinDay: string
  checkinTime: string
  checkoutDay: string
  checkoutTime: string
  countSizeA: number
  countSizeB: number
}
