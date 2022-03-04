package applications

import (
	"cloud.google.com/go/firestore"
	"github.com/labstack/echo/v4"
)

type propertyUsecase struct {
}

func NewPropertyUsecase(ctx echo.Context, firestoreDB *firestore.Client) *propertyUsecase {
	return &propertyUsecase{}
}
