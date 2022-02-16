package functions

import (
	"net/http"

	"github.com/adShoheiTerashima/myRadicalStorage/common"
)

func init() {
	common.InitEcho()
}

func Function(w http.ResponseWriter, r *http.Request) {
	common.EchoServer.ServeHTTP(w, r)
}
