import { searchClient } from '@libs/api/algolia'
import { PropertyForSearch } from '@features/searchList'

type Hits = {
  hits: PropertyForSearch[]
}

/*
TODO: ロジックはまだ決まってないです！
*/
export const searchProperties = async ({
  location,
  checkin,
  checkout,
  sizeA,
  sizeB,
}: any): Promise<PropertyForSearch[]> => {
  const { hits }: Hits = await searchClient.search('', {
    filters: '',
  })
  return hits
}
