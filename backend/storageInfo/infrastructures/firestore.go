package infrastructures

import (
	"context"

	"cloud.google.com/go/firestore"
	storageInfo "github.com/adShoheiTerashima/myRadicalStorage/storageInfo/domains"
	"github.com/labstack/echo/v4"
)

type storageInfoRepository struct {
	ctx        context.Context
	collection *firestore.CollectionRef
	client     *firestore.Client
}

func NewStorageInfoRepository(ctx echo.Context, firestoreDB *firestore.Client) storageInfo.IStorageInfoRepository {
	return &storageInfoRepository{
		ctx:        ctx.Request().Context(),
		collection: firestoreDB.Collection("storageInfo"),
		client:     firestoreDB,
	}
}

func (s *storageInfoRepository) FetchStockRemainingsPerProperties(propertyIDs []string, checkinDate string, checkoutDate string, sizeId int) ([]*storageInfo.StorageInfo, error) {
	result := []*storageInfo.StorageInfo{}
	domain := storageInfo.New()
	var docs []*firestore.DocumentRef

	for _, propertyID := range propertyIDs {
		// checkinの日が営業しているかどうか
		formattedID := domain.FormatID(propertyID, checkinDate, sizeId)
		docs = append(docs, s.collection.Doc(formattedID))
	}
	dss, err := s.client.GetAll(s.ctx, docs)
	if err != nil {
		return result, err
	}
	for _, ss := range dss {
		record := &storageInfo.StorageInfo{}
		if err2 := ss.DataTo(record); err2 != nil {
			return result, err2
		}
		result = append(result, record)
	}
	return result, nil
}
