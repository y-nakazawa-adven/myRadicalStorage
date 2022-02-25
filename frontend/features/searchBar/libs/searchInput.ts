import { SearchInput } from '@features/searchBar'
import { isNumber, isString, removeColon, removeSlash } from '@libs/utils/common'
import { HHmmToTimeFormat, yyyyMMddToSlash } from 'libs/utils/day'

export const queryToParam = (query: any): SearchInput => ({
  objectID: '',
  location: !!query.location && isString(query.location) ? query.location : '',
  address: !!query.address && isString(query.address) ? query.address : '',
  _geoloc: {
    lat: !!query.lat && isNumber(query.lat) ? query.lat : 0,
    lng: !!query.lng && isNumber(query.lng) ? query.lng : 0,
  },
  checkinDay: yyyyMMddToSlash(query.checkinDay),
  checkinTime: HHmmToTimeFormat(query.checkinTime),
  checkoutDay: yyyyMMddToSlash(query.checkoutDay),
  checkoutTime: HHmmToTimeFormat(query.checkoutTime),
  countSizeA: !!query.countSizeA && isNumber(query.countSizeA) ? query.countSizeA : 0,
  countSizeB: !!query.countSizeB && isNumber(query.countSizeB) ? query.countSizeB : 0,
})

export const paramToQuery = (param: SearchInput): { [key: string]: string } => {
  const query: { [key: string]: string } = {}
  if (param.location !== '') {
    query.location = param.location
  }
  if (param.address !== '') {
    query.address = param.address
  }
  if (param._geoloc.lat !== 0) {
    query.lat = param._geoloc.lat as unknown as string
  }
  if (param._geoloc.lng !== 0) {
    query.lng = param._geoloc.lng as unknown as string
  }
  query.checkinDay = removeSlash(param.checkinDay)
  query.checkinTime = removeColon(param.checkinTime)
  query.checkoutDay = removeSlash(param.checkoutDay)
  query.checkoutTime = removeColon(param.checkoutTime)
  if (param.countSizeA > 0) {
    query.countSizeA = param.countSizeA as unknown as string
  }
  if (param.countSizeB > 0) {
    query.countSizeB = param.countSizeB as unknown as string
  }
  return query
}
