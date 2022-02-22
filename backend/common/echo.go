package common

import (
	"net/http"

	baseInfo "github.com/adShoheiTerashima/myRadicalStorage/baseInfo/handlers"
	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
)

var EchoServer *echo.Echo

type customValidator struct {
	validator *validator.Validate
}

func (cv *customValidator) Validate(i interface{}) error {
	return cv.validator.Struct(i)
}

func InitEcho() {
	EchoServer = echo.New()
	// log level
	EchoServer.Logger.SetLevel(log.INFO)

	EchoServer.Validator = &customValidator{validator: validator.New()}
	EchoServer.Use(middleware.Recover())
	EchoServer.Use(middleware.Logger())

	EchoServer.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
	}))

	// routing
	EchoServer.GET("/health-check", func(c echo.Context) error {
		return c.String(http.StatusOK, "ok")
	})
	baseInfo.NewBaseInfoHandler(EchoServer)
}
