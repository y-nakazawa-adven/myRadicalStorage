/*
https://github.com/algolia/algoliasearch-client-go
*/

package infrastructures

import (
	infraLib "github.com/adShoheiTerashima/myRadicalStorage/common/infra"
	property "github.com/adShoheiTerashima/myRadicalStorage/property/domains"
	"github.com/algolia/algoliasearch-client-go/v3/algolia/opt"
	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
)

type propertyRepository struct {
	index *search.Index
}

func NewPropertyRepository(algoliaClient *search.Client, locale string) property.IPropertyForSearchRepository {
	return &propertyRepository{
		index: algoliaClient.InitIndex(infraLib.SearchIndexByRegion(locale)),
	}
}

func (p *propertyRepository) FetchPropertiesByRegion(location string, lat string, lng string) ([]property.PropertyForSearch, error) {
	var result []property.PropertyForSearch
	params := []interface{}{}
	searchWord := ""
	if lat != "" && lng != "" {
		params = []interface{}{
			opt.AroundLatLng(lat + ", " + lng),
			opt.AroundRadius(5),
		}
	} else {
		searchWord = location
	}
	res, err := p.index.Search(searchWord, params...)
	err = res.UnmarshalHits(&result)
	return result, err
}
