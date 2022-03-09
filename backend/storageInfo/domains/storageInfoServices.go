package domains

import "strconv"

type StorageInfoServices struct {
	checkinDay   string
	checkinTime  string
	checkoutDay  string
	checkoutTime string
}

var differenceInCheckinAndCheckout int = -1

func SetviceNew(checkinDay string, checkinTime string, checkoutDay string, checkoutTime string) *StorageInfoServices {
	return &StorageInfoServices{
		checkinDay:   checkinDay,
		checkinTime:  checkinTime,
		checkoutDay:  checkoutDay,
		checkoutTime: checkoutTime,
	}
}

func (s *StorageInfoServices) ValidMaxStorageDays(storageInfo *StorageInfo) bool {
	if differenceInCheckinAndCheckout == -1 {
		checkinDay, err := strconv.Atoi(s.checkinDay)
		checkoutDay, err2 := strconv.Atoi(s.checkoutDay)
		if err != nil || err2 != nil {
			return false
		}
		differenceInCheckinAndCheckout = checkoutDay - checkinDay
	}
	return differenceInCheckinAndCheckout >= storageInfo.maxStorageDays
}

func (s *StorageInfoServices) ValidStockRemaining(storageInfo *StorageInfo) bool {
	return storageInfo.remain > 0
}
