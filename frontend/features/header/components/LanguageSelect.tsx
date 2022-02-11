import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getLanguages } from '@features/header/api/language'
import { Language } from '@features/header/types'
import { option, Props as SelectProps, Select } from '@components/Form'

export const LanguageSelect = () => {
  const { push, locale } = useRouter()
  const [lang, setLang] = useState<option[]>([])

  useEffect(() => {
    getLanguages().then((Languages: Language[]) => {
      setLang(Languages.map((language: Language) => language))
    })
  }, [])

  const languageSelect: SelectProps = {
    selectedValue: locale!,
    columns: 1,
    options: lang,
    click: (value: string) => {
      push('/', undefined, { locale: value })
    },
  }

  return <Select {...languageSelect} />
}
