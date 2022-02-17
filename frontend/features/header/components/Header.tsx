import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { LanguageSelect } from './LanguageSelect'
import { CurrencySelect } from './CurrencySelect'

export const Header = () => {
  const { t } = useTranslation('header')

  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="h-12.5 w-60 border text-center">logo</div>
        <div className="flex">
          <ul className="flex items-center">
            <li className="px-4">
              <a>{t('LINK.FIND_DESTINATION')}</a>
            </li>
            <li className="px-4">
              <a>{t('LINK.HOW_IT_WORKS')}</a>
            </li>
            <li className="px-4">
              <a>{t('LINK.FAQ')}</a>
            </li>
            <li className="px-4">
              <a>{t('LINK.BLOG')}</a>
            </li>
            <li className="px-4">
              <a>{t('LINK.TOURS')}</a>
            </li>
          </ul>
          <ul className="ml-3 flex items-center">
            <li className="px-4 font-bold">
              <Link href="/">{t('ACCOUNT.LOGIN')}</Link>
            </li>
            <li className="px-4 font-bold">
              <Link href="/">{t('ACCOUNT.REGISTER')}</Link>
            </li>
            <li className="ml-4 px-1">
              <CurrencySelect />
            </li>
            <li className="px-1">
              <LanguageSelect />
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px w-full border-b border-gray-dde1e6" />
    </header>
  )
}
