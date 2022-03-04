package infra

import (
	"os"

	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
)

func OpenAlgolia() *search.Index {
	ALGOLIA_APPLICATION_ID := os.Getenv("ALGOLIA_APPLICATION_ID")
	ALGOLIA_API_KEY := os.Getenv("ALGOLIA_API_KEY")
	ALGOLIA_INDEX_NAME := os.Getenv("ALGOLIA_INDEX_NAME")
	client := search.NewClient(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY)
	return client.InitIndex(ALGOLIA_INDEX_NAME)

}
