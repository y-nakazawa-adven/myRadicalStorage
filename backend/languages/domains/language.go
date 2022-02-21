/*
 iso-639-1
 Copyright (c) 2019 Emvi https://github.com/emvi/iso-639-1
 License: MIT

 entity object
*/
package domains

type Language struct {
	Code       string
	Name       string
	NativeName string
}

func Init() *Language {
	return &Language{}
}

func (l *Language) FromCode(code string) Language {
	return Languages[code]
}

func (l *Language) FromName(name string) Language {
	for _, lang := range Languages {
		if lang.Name == name {
			return lang
		}
	}
	return Language{}
}

func (l *Language) FromNativeName(name string) Language {
	for _, lang := range Languages {
		if lang.NativeName == name {
			return lang
		}
	}
	return Language{}
}

func (l *Language) GetName(code string) string {
	return l.FromCode(code).Name
}

func (l *Language) GetNativeName(code string) string {
	return l.FromCode(code).NativeName
}

func (l *Language) CodeForName(name string) string {
	for code, lang := range Languages {
		if lang.Name == name {
			return code
		}
	}
	return ""
}

func (l *Language) CodeForNativeName(name string) string {
	for code, lang := range Languages {
		if lang.NativeName == name {
			return code
		}
	}
	return ""
}

func (l *Language) ValidCode(code string) bool {
	_, ok := Languages[code]
	return ok
}

func (l *Language) ValidName(name string) bool {
	for _, lang := range Languages {
		if lang.Name == name {
			return true
		}
	}

	return false
}

func (l *Language) ValidNativeName(name string) bool {
	for _, lang := range Languages {
		if lang.NativeName == name {
			return true
		}
	}

	return false
}
