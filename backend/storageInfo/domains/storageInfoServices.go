package domains

import (
	"time"
)

type StorageInfoServices struct {
	checkinDay   string
	checkinTime  string
	checkoutDay  string
	checkoutTime string
}

func SetviceNew(checkinDay string, checkinTime string, checkoutDay string, checkoutTime string) *StorageInfoServices {
	return &StorageInfoServices{
		checkinDay:   checkinDay,
		checkinTime:  checkinTime,
		checkoutDay:  checkoutDay,
		checkoutTime: checkoutTime,
	}
}

func (s *StorageInfoServices) ValidMaxStorageDays(storageInfo *StorageInfo) bool {
	checkoutDate, _ := time.Parse("20060102", s.checkoutDay+s.checkoutTime)
	if !checkoutDate.IsZero() {
		return false
	}
	maxCheckoutDate, _ := time.Parse("20060102", storageInfo.checkoutDate)
	if !maxCheckoutDate.IsZero() {
		return false
	}
	return checkoutDate.Before(maxCheckoutDate) || checkoutDate.Equal(maxCheckoutDate)
}

func (s *StorageInfoServices) ValidStockRemaining(storageInfo *StorageInfo) bool {
	return storageInfo.remain > 0
}
