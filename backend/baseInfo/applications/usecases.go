package applications

import (
	"cloud.google.com/go/firestore"
	baseInfo "github.com/adShoheiTerashima/myRadicalStorage/baseInfo/domains"
	"github.com/adShoheiTerashima/myRadicalStorage/baseInfo/infrastructures"
	"github.com/labstack/echo/v4"
)

type baseInfoUsecase struct {
	baseInfoRepository baseInfo.IBaseInfoRepository
}

func NewBaseInfoUsecase(ctx echo.Context, firestoreDB *firestore.Client) baseInfo.IBaseInfoUsecase {
	return &baseInfoUsecase{
		baseInfoRepository: infrastructures.NewBaseInfoRepository(ctx, firestoreDB),
	}
}

func (b *baseInfoUsecase) FetchListByLang(langCode string) ([]*baseInfo.BaseInfo, error) {
	return b.baseInfoRepository.FetchListByLang(langCode)
}
