import { SearchInput } from '@features/searchBar'
import { isString } from '@lib/utils/common'
import { addDays, format } from 'date-fns'

const d = new Date()
export const defaultSearchInput: SearchInput = {
  objectID: '',
  location: '',
  address: '',
  _geoloc: {
    lat: 0,
    lng: 0,
  },
  checkinDay: format(new Date(), 'yyyy/MM/dd'),
  checkinTime: format(new Date(), 'HH:mm'),
  checkoutDay: format(addDays(new Date(), 1), 'yyyy/MM/dd'),
  checkoutTime: format(addDays(new Date(), 1), 'HH:mm'),
  countSizeA: 0,
  countSizeB: 0,
}

// export const queryToParam = (query: any):SearchInput => {
//   const result:SearchInput = {
//     location: !!query.location && isString(query.location) ? query.location : '',
//   }
//   return result
// }
