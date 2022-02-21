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
		collection: firestoreDB.Collection("baseInfo"),
	}
}

func (b *baseInfoRepository) FetchListByLang(result []*baseInfo.BaseInfo, langCode string) error {

	dss, err := b.collection.Where("langCode", "=", langCode).Documents(b.ctx).GetAll()
	if err != nil {
		return err
	}
	for _, ss := range dss {
		record := &baseInfo.BaseInfo{}
		t := baseInfo.New()
		if err2 := ss.DataTo(record); err2 != nil {
			return err2
		}
		t.SetAll(*record)
		result = append(result, t.GetAll())
	}
	return nil
}
