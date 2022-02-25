import { searchClient } from '@libs/api/algolia'
import { PropertyForSearch } from '@features/searchList'

// type Hits = {
//   hits: PropertyForSearch[]
// }

// /*
// TODO: ロジックはまだ決まってないです！
// */
// export const filterProperties = async ({
//   location,
//   checkin,
//   checkout,
//   sizeA,
//   sizeB,
// }: any): Promise<PropertyForSearch[]> => {
//   const { hits }: Hits = await searchClient.search('', {
//     filters: '',
//   })
//   return hits
// }

type Hits<T> = {
  hits: T[]
}
const execSearch = async <T>(filters: string[]): Promise<T[]> => {
  const { hits }: Hits<T> = await searchClient.search('', {
    filters: filters.join(' AND '),
  })
  return hits
}
