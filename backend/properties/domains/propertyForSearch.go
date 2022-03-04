package domains

import "github.com/adShoheiTerashima/myRadicalStorage/baseInfo/domains"

type SearchRequest struct{}

type PropertyForSearch struct {
	ID         string
	name       string
	reviewRate int8
	category   string
	baseInfo   []domains.BaseInfo
	nearest    string
	imageUrl   string
	geoloc     geo
}

type geo struct {
	lat float64
	lng float64
}

func New() *PropertyForSearch {
	return &PropertyForSearch{}
}
