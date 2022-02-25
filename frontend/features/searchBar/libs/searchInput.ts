import { SearchInput } from '@features/searchBar'
import { isNumber, isString } from '@libs/utils/common'
import { HHmmToTimeFormat, yyyyMMddToSlash } from 'libs/utils/day'

// const d = new Date()
// export const defaultSearchInput: SearchInput = {
//   objectID: '',
//   location: '',
//   address: '',
//   _geoloc: {
//     lat: 0,
//     lng: 0,
//   },
//   checkinDay: format(new Date(), 'yyyy/MM/dd'),
//   checkinTime: format(new Date(), 'HH:mm'),
//   checkoutDay: format(addDays(new Date(), 1), 'yyyy/MM/dd'),
//   checkoutTime: format(addDays(new Date(), 1), 'HH:mm'),
//   countSizeA: 0,
//   countSizeB: 0,
// }

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
