import { Geo } from '@lib/utils/types'

export type SearchQuery = { objectID: string; location: string; address: string; _geoloc: Geo }
