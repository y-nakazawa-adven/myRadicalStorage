package inerfaceAdapters

import (
	"net/http"

	"github.com/adShoheiTerashima/myRadicalStorage/common/infra"
	langDomain "github.com/adShoheiTerashima/myRadicalStorage/languages/domains"

	"github.com/labstack/echo/v4"
)

type StorageInfoHandler struct {
}

func NewStorageInfoHandler(e *echo.Echo) {
	handler := &StorageInfoHandler{}
	e.GET("/baseinfo", handler.FetchListByLang)
}

func (p *StorageInfoHandler) FetchListByLang(c echo.Context) error {

	langCode := c.QueryParam("langCode")
	lang := langDomain.New()
	if !lang.ValidCode(langCode) {
		langCode = "ja"
	}

	client := infra.OpenFirestore(c)
	defer infra.CloseFirestore(client)

	// list, err := b.storageInfoUsecases.FetchListByLang(langCode)
	// if err != nil {
	// 	c.Echo().Logger.Error(err)
	// 	return echo.ErrInternalServerError
	// }
	return c.JSON(http.StatusOK, "")
}
