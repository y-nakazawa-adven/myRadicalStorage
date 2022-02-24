package infra

import (
	"context"

	"cloud.google.com/go/firestore"
	baseInfo "github.com/adShoheiTerashima/myRadicalStorage/baseInfo/domains"
	"github.com/labstack/echo/v4"
)

type baseInfoRepository struct {
	ctx        context.Context
	collection *firestore.CollectionRef
}

func NewBaseInfoRepository(ctx echo.Context, firestoreDB *firestore.Client) baseInfo.IBaseInfoRepository {
	return &baseInfoRepository{
		ctx:        ctx.Request().Context(),
		collection: firestoreDB.Collection("baseInfoList"),
	}
}

func (b *baseInfoRepository) FetchListByLang(langCode string) ([]*baseInfo.BaseInfo, error) {
	result := []*baseInfo.BaseInfo{}
	dss, err := b.collection.Where("langCode", "==", langCode).Documents(b.ctx).GetAll()
	if err != nil {
		return result, err
	}
	for _, ss := range dss {
		record := &baseInfo.BaseInfo{}

		if err2 := ss.DataTo(record); err2 != nil {
			return result, err2
		}
		t := baseInfo.New()
		t.SetAll(*record)
		result = append(result, t.GetAll())
	}
	return result, nil
}
