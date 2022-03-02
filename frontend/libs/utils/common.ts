import { SearchInput } from '@features/searchBar'
import { HHmmToTimeFormat, yyyyMMddToSlash } from 'libs/utils/day'

export const isString = (s: any): s is string => typeof s === 'string'

export const isNumber = (n: any): n is number => !isNaN(Number(n)) && n > 0
export const stringToNumber = (n: string): number => (!isNaN(Number(n)) ? Number(n) : 0)

export const removeSlash = (s: string): string => s.split('/').join('')
export const removeColon = (s: string): string => s.split(':').join('')

export const queryToParam = (query: any): SearchInput => ({
  objectID: '',
  location: !!query.location && isString(query.location) ? query.location : '',
  address: !!query.address && isString(query.address) ? query.address : '',
  _geoloc: {
    lat: !!query.lat && isNumber(query.lat) ? +query.lat : 0,
    lng: !!query.lng && isNumber(query.lng) ? +query.lng : 0,
  },
  checkinDay: query.checkinDay ? yyyyMMddToSlash(query.checkinDay) : yyyyMMddToSlash(new Date()),
  checkinTime: query.checkinTime ? HHmmToTimeFormat(query.checkinTime) : HHmmToTimeFormat('0000'),
  checkoutDay: query.checkoutDay ? yyyyMMddToSlash(query.checkoutDay) : yyyyMMddToSlash(new Date()),
  checkoutTime: query.checkoutTime
    ? HHmmToTimeFormat(query.checkoutTime)
    : HHmmToTimeFormat('2330'),
  countSizeA: !!query.countSizeA && isNumber(query.countSizeA) ? query.countSizeA : 0,
  countSizeB: !!query.countSizeB && isNumber(query.countSizeB) ? query.countSizeB : 0,
})
