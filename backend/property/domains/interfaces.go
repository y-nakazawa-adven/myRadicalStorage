package domains

type IPropertyForSearchUsecase interface {
}

type IPropertyForSearchRepository interface {
	FetchPropertiesByRegion(location string, lat string, lng string) ([]PropertyForSearch, error)
}
