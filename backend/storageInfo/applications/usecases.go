package applications

import (
	"cloud.google.com/go/firestore"
	storageInfo "github.com/adShoheiTerashima/myRadicalStorage/storageInfo/domains"
	"github.com/labstack/echo/v4"
)

type storageInfoUsecase struct{}

func NewStorageInfoUsecase(ctx echo.Context, firestoreDB *firestore.Client) storageInfo.IStorageInfoUsecase {
	return &storageInfoUsecase{}
}
