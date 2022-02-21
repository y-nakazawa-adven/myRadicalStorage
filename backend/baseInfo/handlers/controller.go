package handlers

import (
	"net/http"

	"github.com/adShoheiTerashima/myRadicalStorage/baseInfo/domains"
	"github.com/adShoheiTerashima/myRadicalStorage/baseInfo/usecases"
	"github.com/adShoheiTerashima/myRadicalStorage/common/infra"

	"github.com/labstack/echo/v4"
)

type BaseInfoHandler struct {
	baseInfoUsecases domains.IBaseInfoUsecase
}

func NewBaseInfoHandler(e *echo.Echo) {
	handler := &BaseInfoHandler{}
	e.GET("/baseinfo", handler.FetchListByLang)
}

func (b *BaseInfoHandler) FetchListByLang(c echo.Context) error {
	// TODO: bind and validation

	client := infra.OpenFirestore(c)
	defer infra.CloseFirestore(client)
	b.baseInfoUsecases = usecases.NewBaseInfoUsecase(c, client)

	list, err := b.baseInfoUsecases.FetchListByLang("dummy")
	if err != nil {
		c.Echo().Logger.Error(err)
		return echo.ErrInternalServerError
	}
	return c.JSON(http.StatusOK, list)
}
