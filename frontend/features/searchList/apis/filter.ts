import { searchClient } from '@libs/api/algolia'
import { SearchInput } from '@features/searchBar'
import { removeColon, removeSlash, stringToNumber } from '@libs/utils/common'

type Hits<T> = {
  hits: T[]
}
export const fetchProperties = async <T>(query: SearchInput, indexName?: string): Promise<T[]> => {
  const param: { [key: string]: string | number } = {}
  const filters: string[] = []
  console.log(query)
  const checkinDay = removeSlash(query.checkinDay)
  const checkinTime = removeColon(query.checkinTime)
  const checkoutDay = removeSlash(query.checkoutDay)
  const checkoutTime = removeColon(query.checkoutTime)
  console.log(checkinDay, checkinTime, checkoutDay, checkoutTime)
  /**
   * 緯度経度があれば、それで検索
   * なければ、施設名から検索。住所での検索は今のところ考えてない
   */
  if (!!query._geoloc.lat && !!query._geoloc.lng) {
    param.aroundLatLng = `${query._geoloc.lat}, ${query._geoloc.lng}`
    param.aroundRadius = 5 // TODO: 半径をどうやって判断するか
  } else if (!!query.location) {
    filters.push(`(name:"${query.location}")`)
  }

  // 営業日チェック。チェックイン日が営業日かどうか
  if (!!checkinDay && !!checkinTime) {
    filters.push(`(workingDates.${checkinDay.slice(4)}:"${checkinTime}")`)
  }

  // 営業日チェック。チェックアウト日が営業日かどうか
  if (!!checkoutDay && !!checkoutTime) {
    filters.push(`(workingDates.${checkoutDay.slice(4)}:"${checkoutTime}")`)
  }

  // 保管日数チェック。保管日数を満たしているか
  if (!!checkinDay && !!checkoutDay) {
    const checkinDayNum = stringToNumber(checkinDay)
    const checkoutDayNum = stringToNumber(checkoutDay)
    // +1に注意。その日も含みます。
    filters.push(`(maxStorageDays.${checkinDay.slice(4)} <= ${checkoutDayNum - checkinDayNum + 1})`)
  }

  // SIZE Aのサイズチェック。保管できる数かどうか
  if (!!checkinDay && query.countSizeA > 0) {
    // +1に注意。その日も含みます。
    filters.push(`(luggageCapacity.${checkinDay.slice(4)}.SIZE_A >= ${query.countSizeA})`)
  }

  // SIZE Bのサイズチェック。保管できる数かどうか
  if (!!checkinDay && query.countSizeB > 0) {
    // +1に注意。その日も含みます。
    filters.push(`(luggageCapacity.${checkinDay.slice(4)}.SIZE_B >= ${query.countSizeB})`)
  }

  console.log('query:', {
    ...param,
    filters: filters.join(' AND '),
  })
  const { hits }: Hits<T> = await searchClient(indexName).search('', {
    ...param,
    filters: filters.join(' AND '),
  })
  return hits
}
