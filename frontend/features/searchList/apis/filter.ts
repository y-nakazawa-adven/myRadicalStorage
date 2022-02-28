import { searchClient } from '@libs/api/algolia'
import { SearchInput } from '@features/searchBar'
import { stringToNumber } from '@libs/utils/common'

type Hits<T> = {
  hits: T[]
}
export const fetchProperties = async <T>(query: SearchInput): Promise<T[]> => {
  const param: { [key: string]: string | number } = {}
  const filters: string[] = []
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
  if (!!query.checkinDay && !!query.checkinTime) {
    filters.push(`(workingDates.${query.checkinDay.slice(4)}:"${query.checkinTime.slice(4)}")`)
  }

  // 営業日チェック。チェックアウト日が営業日かどうか
  if (!!query.checkoutDay && !!query.checkoutTime) {
    filters.push(`(workingDates.${query.checkoutDay.slice(4)}:"${query.checkinTime.slice(4)}")`)
  }

  // 保管日数チェック。保管日数を満たしているか
  if (!!query.checkinDay && !!query.checkoutDay) {
    const checkinDay = stringToNumber(query.checkinDay)
    const checkoutDay = stringToNumber(query.checkoutDay)
    // +1に注意。その日も含みます。
    filters.push(`(maxStorageDays.${query.checkinDay.slice(4)} <= ${checkoutDay - checkinDay + 1})`)
  }

  // SIZE Aのサイズチェック。保管できる数かどうか
  if (!!query.checkinDay && query.countSizeA > 0) {
    // +1に注意。その日も含みます。
    filters.push(`(luggageCapacity.${query.checkinDay.slice(4)}.SIZE_A >= ${query.countSizeA})`)
  }

  // SIZE Bのサイズチェック。保管できる数かどうか
  if (!!query.checkinDay && query.countSizeB > 0) {
    // +1に注意。その日も含みます。
    filters.push(`(luggageCapacity.${query.checkinDay.slice(4)}.SIZE_B >= ${query.countSizeB})`)
  }

  const { hits }: Hits<T> = await searchClient.search('', {
    ...param,
    filters: filters.join(' AND '),
  })
  return hits
}
