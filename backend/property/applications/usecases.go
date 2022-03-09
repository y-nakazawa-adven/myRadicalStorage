package applications

import (
	"cloud.google.com/go/firestore"
	storageInfo "github.com/adShoheiTerashima/myRadicalStorage/storageInfo/domains"
	sInfra "github.com/adShoheiTerashima/myRadicalStorage/storageInfo/infrastructures"
	"github.com/labstack/echo/v4"
)

type propertyUsecase struct {
	storageInfoRepository storageInfo.IStorageInfoRepository
}

func NewPropertyUsecase(ctx echo.Context, firestoreDB *firestore.Client) *propertyUsecase {
	return &propertyUsecase{
		storageInfoRepository: sInfra.NewStorageInfoRepository(ctx, firestoreDB),
	}
}

func (p *propertyUsecase) FetchListByLang(langCode string) {

}
