import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

import { option, Props as SelectProps, Select } from '@components/Form/Select'
import { Currency } from '@features/header/types'
import { getCurrency } from '@features/header/api/currency'

export const CurrencySelect = () => {
  const { t } = useTranslation('header')
  const [selectedCurrency, setSelectedCurrency] = useState('¥')
  const [currency, setCurrency] = useState<option[]>([])

  useEffect(() => {
    getCurrency().then((currencyList: Currency[]) => {
      setCurrency(
        currencyList.map((currencyData: Currency) => ({
          boldText: currencyData.symbol,
          text: currencyData.text,
          value: currencyData.value,
        })),
      )
    })
  }, [])

  const currencySelect: SelectProps = {
    selectedValue: selectedCurrency,
    title: t('CURRENCY.SELECT_TITLE'),
    columns: 6,
    options: currency,
    click: (value: string) => {
      setSelectedCurrency(value)
    },
  }
  return <Select {...currencySelect} />
}
