import DatePicker from 'react-datepicker'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { addMinutes, addMonths, endOfDay, getDayOfYear, startOfDay } from 'date-fns'
import { Configure, InstantSearch } from 'react-instantsearch-dom'

import { Luggage, Minus, Plus, Search, Today } from '@components/Icons'
import { Popover } from '@components/Elements/Popover'
import { suggestClient, suggestIndexName } from '@lib/api/algolia'
import { SuggestBox } from './SuggestBox'

export const SearchBar = () => {
  const { t } = useTranslation('searchBar')
  const [locationInput, setLocationInput] = useState('test')
  const [countSizeA, setCountSizeA] = useState(0)
  const [countSizeB, setCountSizeB] = useState(0)
  const clickSizeA = (num: number) => {
    countSizeA + num >= 0 ? setCountSizeA(countSizeA + num) : 0
  }
  const clickSizeB = (num: number) => (countSizeB + num >= 0 ? setCountSizeB(countSizeB + num) : 0)

  const [checkinDate, setCheckinDate] = useState<Date>()
  const [checkoutDate, setCheckoutDate] = useState<Date>()

  const timeIntervals = 30 // 時間選択の間隔。30分単位
  const dateFormat = 'yyyy/MM/dd HH:mm' // 選択後にフォームに表示される日付のフォーマット。ex. 2022/01/01 00:00
  const timeFormat = 'HH:mm' // datepicker内の時間のフォーマット ex. 11:00

  // チェックインのdatePickerの設定諸々
  const checkinConfig = {
    minDate: new Date(),
    maxDate: checkoutDate || addMonths(new Date(), 3), // 最大3ヶ月
    minTime: startOfDay(new Date()),
    maxTime:
      checkoutDate && checkinDate && getDayOfYear(checkoutDate) === getDayOfYear(checkinDate)
        ? addMinutes(checkoutDate, -30)
        : endOfDay(new Date()),
    onChange: (date: Date) => setCheckinDate(date),
  }

  // チェックアウトのdatePickerの設定諸々
  const checkoutConfig = {
    minDate: checkinDate || new Date(),
    maxDate: addMonths(new Date(), 3), // 最大3ヶ月
    minTime:
      checkoutDate && checkinDate && getDayOfYear(checkoutDate) === getDayOfYear(checkinDate) // 最大３ヶ月想定なので、重複がない点を考慮しgetDayOfYear使ってます
        ? addMinutes(checkinDate, 30)
        : startOfDay(new Date()),
    maxTime: endOfDay(new Date()),
    onChange: (date: Date) => setCheckoutDate(date),
  }

  return (
    <div className="flex items-center px-4 py-2.5">
      <InstantSearch indexName={suggestIndexName} searchClient={suggestClient}>
        <Configure hitsPerPage={4} />
        <SuggestBox
          id="location-input"
          inputText={locationInput}
          placeholder={t('AREA_INPUT.PLACEHOLDER')}
          width="w-56"
          change={(e) => {
            setLocationInput(e.target.value)
          }}
        />
      </InstantSearch>
      <div>
        <label
          htmlFor="checkin"
          className="focus-within:outline-none ml-4 flex rounded-lg border py-2.5 px-2 text-sm focus-within:ring-2 focus-within:ring-blue-600"
          tabIndex={0}
        >
          <Today className="z-10 fill-green-32cccc" width="20" height="20" />
          <DatePicker
            id="checkin"
            closeOnScroll
            selected={checkinDate}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            minDate={checkinConfig.minDate}
            maxDate={checkinConfig.maxDate}
            minTime={checkinConfig.minTime}
            maxTime={checkinConfig.maxTime}
            onChange={checkinConfig.onChange}
            isClearable
            showTimeSelect
            timeIntervals={timeIntervals}
            placeholderText={t('CHECKIN.PLACEHOLDER')}
            className="focus:outline-none pl-2"
          />
        </label>
      </div>
      <div>
        <label
          htmlFor="checkout"
          className="focus-within:outline-none ml-2 flex rounded-lg border py-2.5 px-2 text-sm focus-within:ring-2 focus-within:ring-blue-600"
          tabIndex={0}
        >
          <Today className="z-10 fill-green-32cccc" width="20" height="20" />
          <DatePicker
            id="checkout"
            closeOnScroll
            selected={checkoutDate}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            minDate={checkoutConfig.minDate}
            maxDate={checkoutConfig.maxDate}
            minTime={checkoutConfig.minTime}
            maxTime={checkoutConfig.maxTime}
            onChange={checkoutConfig.onChange}
            isClearable
            showTimeSelect
            timeIntervals={timeIntervals}
            placeholderText={t('CHECKOUT.PLACEHOLDER')}
            className="focus:outline-none pl-2"
          />
        </label>
      </div>
      <div className="ml-4">
        <Popover
          placeholder={t('SIZE_A.PLACEHOLDER')}
          value={countSizeA > 0 ? `サイズA × ${countSizeA}` : ''}
          icon={<Luggage className="z-10 fill-green-32cccc" width="20" height="20" />}
          className="w-52"
        >
          <div className="w-80 p-5">
            <div className="flex items-center">
              <p className="mr-4">サイズA</p>
              <button className="px-2" onClick={() => clickSizeA(-1)}>
                <Minus className="fill-green-32cccc" width="20" height="20" />
              </button>
              <span className="w-6 text-center">{countSizeA}</span>
              <button className="px-2" onClick={() => clickSizeA(1)}>
                <Plus className="fill-green-32cccc" width="20" height="20" />
              </button>
            </div>
            <p className="mt-4 text-xs">
              最大辺が45cm未満の大きさのお荷物 (リュック、ハンドバッグ、お手荷物など)
            </p>
          </div>
        </Popover>
      </div>
      <div className="ml-4">
        <Popover
          placeholder={t('SIZE_B.PLACEHOLDER')}
          value={countSizeB > 0 ? `サイズB × ${countSizeB}` : ''}
          icon={<Luggage className="z-10 fill-green-32cccc" width="20" height="20" />}
          className="w-52"
        >
          <div className="w-80 p-5">
            <div className="flex items-center">
              <p className="mr-4">サイズB</p>
              <button className="px-2" onClick={() => clickSizeB(-1)}>
                <Minus className="fill-green-32cccc" width="20" height="20" />
              </button>
              <span className="w-6 text-center">{countSizeB}</span>
              <button className="px-2" onClick={() => clickSizeB(1)}>
                <Plus className="fill-green-32cccc" width="20" height="20" />
              </button>
            </div>
            <p className="mt-4 text-xs">
              最大辺が45cm未満の大きさのお荷物 (リュック、ハンドバッグ、お手荷物など)
            </p>
          </div>
        </Popover>
      </div>
    </div>
  )
}
