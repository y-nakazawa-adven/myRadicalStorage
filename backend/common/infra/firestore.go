package infra

import (
	"log"

	"cloud.google.com/go/firestore"
	"github.com/labstack/echo/v4"
)

func OpenFirestore(ctx echo.Context) *firestore.Client {
	projectID := "YOUR_PROJECT_ID"

	client, err := firestore.NewClient(ctx.Request().Context(), projectID)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}
	return client
}

func CloseFirestore(client *firestore.Client) {
	client.Close()
}
