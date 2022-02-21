package domains

import (
	lang "github.com/adShoheiTerashima/myRadicalStorage/languages/domains"
)

type BaseInfo struct {
	id       uint
	name     string
	langCode string
}

func New() *BaseInfo {
	return &BaseInfo{}
}

func (b *BaseInfo) SetAll(data BaseInfo) {
	b.SetID(data.id)
	b.SetName(data.name)
	b.SetLangCode(data.langCode)
}
func (b *BaseInfo) GetAll() *BaseInfo {
	return b
}
func (b *BaseInfo) SetID(id uint) {
	b.id = id
}
func (b *BaseInfo) GetID() uint {
	return b.id
}
func (b *BaseInfo) SetName(name string) {
	b.name = name
}
func (b *BaseInfo) GetName() string {
	return b.name
}
func (b *BaseInfo) SetLangCode(langCode string) {
	l := lang.Init()
	if l.ValidCode(langCode) {
		b.langCode = langCode
	}
	b.langCode = ""
}
func (b *BaseInfo) GetLangCode() string {
	return b.langCode
}
