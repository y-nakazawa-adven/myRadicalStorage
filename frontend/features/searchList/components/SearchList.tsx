import { useTranslation } from 'next-i18next'
import { SearchListItem } from './SearchListItem'
import { Button } from '@components/Elements'

export const SearchList = () => {
  const { t } = useTranslation('searchList')
  return (
    <div className="h-full min-w-84 overflow-hidden py-4">
      <div className="mb-2 flex items-center justify-between pr-4">
        <p className="text-2xl">{t('TITLE')}</p>
        <Button
          value="絞り込み"
          click={() => {}}
          className="focus:outline-none w-max rounded-lg border py-2.5 pr-3 focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="h-full overflow-y-scroll pr-4 pb-12">
        <ul className="mt-4 flex flex-col gap-4">
          <li className="flex h-44 cursor-pointer overflow-hidden rounded-3xl border">
            <SearchListItem />
          </li>
          <li className="flex h-44 cursor-pointer overflow-hidden rounded-3xl border">
            <SearchListItem />
          </li>
          <li className="flex h-44 cursor-pointer overflow-hidden rounded-3xl border">
            <SearchListItem />
          </li>
          <li className="flex h-44 cursor-pointer overflow-hidden rounded-3xl border">
            <SearchListItem />
          </li>
          <li className="flex h-44 cursor-pointer overflow-hidden rounded-3xl border">
            <SearchListItem />
          </li>
        </ul>
      </div>
    </div>
  )
}
