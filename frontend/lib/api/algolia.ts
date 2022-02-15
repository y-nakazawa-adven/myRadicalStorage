import algoliasearch from 'algoliasearch/lite'

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || ''
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || ''
const ALGOLIA_SUGGEST_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGEST || ''

export const suggestClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
export const suggestIndexName = ALGOLIA_SUGGEST_INDEX_NAME

export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY).initIndex(
  ALGOLIA_INDEX_NAME,
)
