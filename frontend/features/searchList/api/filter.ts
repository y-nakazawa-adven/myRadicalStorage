import { searchClient } from '@lib/api/algolia'
import { PropertyForSearch } from '@features/searchList'

type Hits = {
  hits: PropertyForSearch[]
}

/*
TODO: ロジックはまだ決まってないです！
*/
export const filterProperties = async ({
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
