package infra

import (
	"fmt"
	"log"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/labstack/echo/v4"
)

func OpenFirestore(ctx echo.Context) *firestore.Client {
	projectID := os.Getenv("GCP_PROJECT_ID")
	fmt.Printf("%#v", projectID)
	client, err := firestore.NewClient(ctx.Request().Context(), projectID)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}
	return client
}

func CloseFirestore(client *firestore.Client) {
	client.Close()
}
