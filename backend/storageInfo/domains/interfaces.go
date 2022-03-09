package domains

type IStorageInfoUsecase interface {
}

type IStorageInfoRepository interface {
	FetchStockRemainingsPerProperties(propertyId []string, yyyymmdd string, hhmm string, sizeId int) ([]*StorageInfo, error)
}
