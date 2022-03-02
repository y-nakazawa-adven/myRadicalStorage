import { SearchInput } from '@features/searchBar'
import { removeColon, removeSlash } from '@libs/utils/common'

export const paramToQuery = (param: SearchInput): { [key: string]: string } => {
  const query: { [key: string]: string } = {}
  if (param.location !== '') query.location = param.location
  if (param.address !== '') query.address = param.address
  if (param._geoloc.lat !== 0) query.lat = param._geoloc.lat as unknown as string
  if (param._geoloc.lng !== 0) query.lng = param._geoloc.lng as unknown as string
  if (param.checkinDay) query.checkinDay = removeSlash(param.checkinDay)
  if (param.checkinTime) query.checkinTime = removeColon(param.checkinTime)
  if (param.checkoutDay) query.checkoutDay = removeSlash(param.checkoutDay)
  if (param.checkoutTime) query.checkoutTime = removeColon(param.checkoutTime)
  if (param.countSizeA > 0) query.countSizeA = param.countSizeA as unknown as string
  if (param.countSizeB > 0) query.countSizeB = param.countSizeB as unknown as string

  return query
}
