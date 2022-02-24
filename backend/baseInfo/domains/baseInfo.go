package domains

import (
	lang "github.com/adShoheiTerashima/myRadicalStorage/languages/domains"
)

type BaseInfo struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	LangCode string `json:"langCode" query:"langCode"`
}

func New() *BaseInfo {
	return &BaseInfo{}
}

func (b *BaseInfo) SetAll(data BaseInfo) {
	b.SetID(data.ID)
	b.SetName(data.Name)
	b.SetLangCode(data.LangCode)
}
func (b *BaseInfo) GetAll() *BaseInfo {
	return b
}
func (b *BaseInfo) SetID(id int) {
	b.ID = id
}
func (b *BaseInfo) GetID() int {
	return b.ID
}
func (b *BaseInfo) SetName(name string) {
	b.Name = name
}
func (b *BaseInfo) GetName() string {
	return b.Name
}
func (b *BaseInfo) SetLangCode(langCode string) {
	l := lang.New()
	if l.ValidCode(langCode) {
		b.LangCode = langCode
		return
	}
	b.LangCode = ""
}
func (b *BaseInfo) GetLangCode() string {
	return b.LangCode
}
