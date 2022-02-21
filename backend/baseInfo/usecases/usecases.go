package usecases

import (
	"cloud.google.com/go/firestore"
	baseInfo "github.com/adShoheiTerashima/myRadicalStorage/baseInfo/domains"
	"github.com/adShoheiTerashima/myRadicalStorage/baseInfo/infra"
	"github.com/labstack/echo/v4"
)

type baseInfoUsecase struct {
	baseInfoRepository baseInfo.IBaseInfoRepository
}

func NewBaseInfoUsecase(ctx echo.Context, firestoreDB *firestore.Client) baseInfo.IBaseInfoUsecase {
	return &baseInfoUsecase{
		baseInfoRepository: infra.NewBaseInfoRepository(ctx, firestoreDB),
	}
}

func (b *baseInfoUsecase) FetchListByLang(langCode string) ([]*baseInfo.BaseInfo, error) {
	list := []*baseInfo.BaseInfo{}
	err := b.baseInfoRepository.FetchListByLang(list, langCode)
	return list, err
}
