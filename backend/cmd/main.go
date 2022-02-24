package main

import (
	"github.com/adShoheiTerashima/myRadicalStorage/common"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		panic("Error loading .env file")
	}
	common.InitEcho()
	common.EchoServer.Start(":8080")
}
