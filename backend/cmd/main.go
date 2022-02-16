package main

import (
	"github.com/adShoheiTerashima/myRadicalStorage/common"
)

func main() {
	common.InitEcho()
	common.EchoServer.Start(":8080")
}
