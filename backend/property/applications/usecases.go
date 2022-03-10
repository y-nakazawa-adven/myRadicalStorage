package applications

import (
	"cloud.google.com/go/firestore"
	infraLib "github.com/adShoheiTerashima/myRadicalStorage/common/infra"
	property "github.com/adShoheiTerashima/myRadicalStorage/property/domains"
	pInfra "github.com/adShoheiTerashima/myRadicalStorage/property/infrastructures"
	storageInfo "github.com/adShoheiTerashima/myRadicalStorage/storageInfo/domains"
	sInfra "github.com/adShoheiTerashima/myRadicalStorage/storageInfo/infrastructures"
	"github.com/labstack/echo/v4"
)

type propertyUsecase struct {
	propertySearchRepository property.IPropertyForSearchRepository
	storageInfoRepository    storageInfo.IStorageInfoRepository
}

func NewPropertyUsecase(ctx echo.Context, firestoreDB *firestore.Client, locale string) *propertyUsecase {
	client := infraLib.OpenAlgolia()
	return &propertyUsecase{
		propertySearchRepository: pInfra.NewPropertyRepository(client, locale),
		storageInfoRepository:    sInfra.NewStorageInfoRepository(ctx, firestoreDB),
	}
}

func (p *propertyUsecase) FetchProperties(req property.SearchRequest) {
	// properties取得
	// propertiesをもとにstockデータ取得
	// stockチェック、保管期間チェック、
	// 良いのだけリターン
}
