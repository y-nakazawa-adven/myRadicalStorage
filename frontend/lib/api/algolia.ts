import algoliasearch from 'algoliasearch/lite'

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || ''
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''
const ALGOLIA_INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || ''

export const suggestIndexNameJA = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGEST_JA || ''
export const suggestIndexNameEN = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGEST_EN || ''

export const suggestClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
export const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY).initIndex(
  ALGOLIA_INDEX_NAME,
)
