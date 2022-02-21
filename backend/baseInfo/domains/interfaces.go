package domains

type IBaseInfoUsecase interface {
	FetchListByLang(langCode string) ([]*BaseInfo, error)
}

type IBaseInfoRepository interface {
	FetchListByLang(result []*BaseInfo, langCode string) error
}
