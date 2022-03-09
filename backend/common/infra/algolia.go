package infra

import (
	"os"

	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
)

var ALGOLIA_SEARCH_INDEX_NAME_JA string = os.Getenv("ALGOLIA_SEARCH_INDEX_NAME_JA")

func OpenAlgolia() *search.Client {
	ALGOLIA_APPLICATION_ID := os.Getenv("ALGOLIA_APPLICATION_ID")
	ALGOLIA_API_KEY := os.Getenv("ALGOLIA_API_KEY")

	return search.NewClient(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY)
}

func SearchIndexByRegion(locale string) string {
	switch locale {
	case "ja":
		return ALGOLIA_SEARCH_INDEX_NAME_JA
	default:
		return ALGOLIA_SEARCH_INDEX_NAME_JA
	}
}
