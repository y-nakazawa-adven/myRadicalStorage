import { Select } from '@components/Elements/Select'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export const Header = () => {
  const { t } = useTranslation('header')
  return (
    <header className="flex items-center justify-between py-2.5 px-3.5">
      <div className="h-12.5 w-60 border text-center">logo</div>
      <div className="flex">
        <ul className="flex">
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
        <ul className="ml-3 flex">
          <li className="px-2 font-bold">
            <Link href="/">{t('ACCOUNT.LOGIN')}</Link>
          </li>
          <li className="px-2 font-bold">
            <Link href="/">{t('ACCOUNT.REGISTER')}</Link>
          </li>
          <li className="px-2">
            <Select />
          </li>
        </ul>
      </div>
    </header>
  )
}
