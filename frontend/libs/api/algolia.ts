import algoliasearch from 'algoliasearch/lite'

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || ''
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''

export const indexNameJA = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_JA || ''
export const indexNameEN = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_EN || ''

export const suggestIndexNameJA = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGEST_JA || ''
export const suggestIndexNameEN = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGEST_EN || ''

export const suggestClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
export const searchClient = (indexName = indexNameJA) =>
  algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY).initIndex(indexName)
