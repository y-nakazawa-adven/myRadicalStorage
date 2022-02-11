import { Button } from '@components/Elements'
import { useTranslation } from 'next-i18next'

export const SearchList = () => {
  const { t } = useTranslation('searchList')
  return (
    <div className="h-full overflow-y-scroll">
      <div className="flex items-center justify-between py-4 pr-2">
        <p className="text-2xl">{t('TITLE')}</p>
        <Button
          value="絞り込み"
          click={() => {}}
          className="focus:outline-none w-max rounded-lg border py-2.5 pr-3 focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </div>
  )
}
