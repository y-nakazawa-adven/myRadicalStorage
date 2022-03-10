package domains

import "strconv"

type SearchRequest struct{}

type StorageInfo struct {
	ID           string
	stock        int
	remain       int
	price        int
	checkoutDate string
}

func New() *StorageInfo {
	return &StorageInfo{}
}

func (s *StorageInfo) FormatID(id string, checkinDate string, sizeId int) string {
	return id + "_" + checkinDate + "_" + strconv.Itoa(sizeId)
}

func (s *StorageInfo) isExist(id string, checkinDay string, checkinTime string, sizeId int) bool {
	return id+"_"+checkinDay+checkinTime+"_"+strconv.Itoa(sizeId) == s.ID
}
