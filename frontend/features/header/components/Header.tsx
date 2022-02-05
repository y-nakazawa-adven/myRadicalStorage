import { SetStateAction, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { Props as SelectProps, Select } from '@components/Elements/Select'

export const Header = () => {
  const { t } = useTranslation('header')
  const [selectedCurrency, setSelectedCurrency] = useState('¥')
  const selectOption: SelectProps = {
    selectedValue: selectedCurrency,
    title: t('CURRENCY.SELECT_TITLE'),
    columns: 6,
    options: [
      {
        boldText: '¥',
        text: 'JPY',
        value: '¥',
      },
      {
        boldText: '$',
        text: 'USD',
        value: '$',
      },
    ],
    click: (value: string) => {
      setSelectedCurrency(value)
    },
  }
  return (
    <header className="flex items-center justify-between py-2.5 px-3.5">
      <div className="h-12.5 w-60 border text-center">logo</div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-2">
            <a>{t('LINK.FIND_DESTINATION')}</a>
          </li>
          <li className="px-2">
            <a>{t('LINK.HOW_IT_WORKS')}</a>
          </li>
          <li className="px-2">
            <a>{t('LINK.FAQ')}</a>
          </li>
          <li className="px-2">
            <a>{t('LINK.BLOG')}</a>
          </li>
          <li className="px-2">
            <a>{t('LINK.TOURS')}</a>
          </li>
        </ul>
        <ul className="ml-3 flex items-center">
          <li className="px-2 font-bold">
            <Link href="/">{t('ACCOUNT.LOGIN')}</Link>
          </li>
          <li className="px-2 font-bold">
            <Link href="/">{t('ACCOUNT.REGISTER')}</Link>
          </li>
          <li className="px-2">
            <Select {...selectOption} />
          </li>
        </ul>
      </div>
    </header>
  )
}
