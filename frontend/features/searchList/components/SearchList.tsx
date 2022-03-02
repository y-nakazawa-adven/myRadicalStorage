import { useTranslation } from 'next-i18next'
import { SearchListItem } from './SearchListItem'
import { Modal, ToggleButton } from '@components/Elements'
import { Wifi } from '@components/Icons'
import { PropertyForSearch, SearchPropertiesAction } from '@features/searchList'
import { Dispatch, useEffect } from 'react'

type Props = {
  properties: PropertyForSearch[]
  dispatch: Dispatch<SearchPropertiesAction>
}

export const SearchList = ({ properties, dispatch }: Props) => {
  const { t } = useTranslation(['searchList', 'searchFiltering'])

  return (
    <div className="h-full min-w-84 overflow-hidden py-4">
      <div className="mb-2 flex items-center justify-between pr-4">
        <h1 className="text-2xl">{t('TITLE')}</h1>
        <Modal
          text={t('FILTER_TEXT')}
          className="focus:outline-none w-max rounded-lg border py-2 pl-2.5 pr-3 focus:ring-2 focus:ring-blue-600"
          title={t('FILTER_TEXT')}
          submitText={t('SUBMIT_BTN_TEXT')}
        >
          <div className="min-w-80 p-4">
            <ul className="flex flex-col gap-4 px-8">
              <li className="flex items-center justify-between gap-2">
                <Wifi className="flex-none fill-green-32cccc" width="18" height="18" />
                <p className="flex-1">{t('FILTER_A', { ns: 'searchFiltering' })}</p>
                <ToggleButton className="flex-none" />
              </li>
              <li className="flex items-center justify-between gap-2">
                <Wifi className="fill-green-32cccc" width="18" height="18" />
                <p className="flex-1">{t('FILTER_B', { ns: 'searchFiltering' })}</p>
                <ToggleButton />
              </li>
              <li className="flex items-center justify-between gap-2">
                <Wifi className="fill-green-32cccc" width="18" height="18" />
                <p className="flex-1">{t('FILTER_C', { ns: 'searchFiltering' })}</p>
                <ToggleButton />
              </li>
            </ul>
          </div>
        </Modal>
      </div>
      <div className="h-full overflow-y-scroll pr-4 pb-12">
        {properties.length > 0 && (
          <ul className="mt-4 flex flex-col gap-4">
            {properties.map((property, index) => (
              <li
                className="flex h-44 cursor-pointer overflow-hidden rounded-3xl border"
                key={`SearchListItem-${index}`}
              >
                <SearchListItem
                  imageUrl={property.imageUrl}
                  name={property.name}
                  reviewRate={property.reviewRate}
                  category={property.category}
                  baseInfo={property.baseInfo}
                  nearest={property.nearest}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
