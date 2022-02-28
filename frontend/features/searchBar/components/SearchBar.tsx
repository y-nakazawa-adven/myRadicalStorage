import DatePicker from 'react-datepicker'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import {
  addMinutes,
  addMonths,
  endOfDay,
  format,
  getDayOfYear,
  isAfter,
  isBefore,
  startOfDay,
} from 'date-fns'
import { Configure, InstantSearch } from 'react-instantsearch-dom'
import { useRouter } from 'next/router'

import { Luggage, Minus, Plus, Search, Today } from '@components/Icons'
import { Button, Popover } from '@components/Elements'
import { suggestClient, suggestIndexNameJA, suggestIndexNameEN } from '@libs/api/algolia'
import { DATE_FORMAT, DAY_FORMAT, TIME_FORMAT } from '@libs/utils/const'
import { paramToQuery, SearchQuery } from '@features/searchBar'
import { toDateFormat } from '@libs/utils/day'
import { queryToParam } from '@libs/utils/common'

// private
import { SuggestBox } from './SuggestBox'
import { useSearchInput } from '../hooks/useSearchInput'
import { LocationValue } from '../libs/location'

export const SearchBar = () => {
  const { locale, query, push } = useRouter()
  const [inputState, dispatch] = useSearchInput(queryToParam(query))
  const { t } = useTranslation('searchBar')
  const locationFormat = new LocationValue(inputState)
  const [locationInput, setLocationInput] = useState(locationFormat.Format)
  const [countSizeA, setCountSizeA] = useState(inputState.countSizeA)
  const [countSizeB, setCountSizeB] = useState(inputState.countSizeB)
  const clickSizeA = (num: number) => {
    if (countSizeA + num >= 0) {
      dispatch({ type: 'updateCountSizeA', countSizeA: countSizeA + num })
      setCountSizeA((prevCountSizeA) => prevCountSizeA + num)
    } else {
      dispatch({ type: 'updateCountSizeA', countSizeA: 0 })
      setCountSizeA(0)
    }
  }
  const clickSizeB = (num: number) => {
    if (countSizeB + num >= 0) {
      dispatch({ type: 'updateCountSizeB', countSizeB: countSizeB + num })
      setCountSizeB((prevCountSizeB) => prevCountSizeB + num)
    } else {
      dispatch({ type: 'updateCountSizeB', countSizeB: 0 })
      setCountSizeB(0)
    }
  }

  const initialCheckinDate = toDateFormat(inputState.checkinDay, inputState.checkinTime)
  const [checkinDate, setCheckinDate] = useState(
    isAfter(initialCheckinDate, new Date()) ? initialCheckinDate : new Date(),
  )

  const initialCheckoutDate = toDateFormat(inputState.checkoutDay, inputState.checkoutTime)
  const afterThereeMonth = addMonths(new Date(), 3) // 最大3ヶ月
  const [checkoutDate, setCheckoutDate] = useState(
    isBefore(initialCheckoutDate, afterThereeMonth) ? initialCheckoutDate : afterThereeMonth,
  )

  const timeIntervals = 30 // 時間選択の間隔。30分単位
  // チェックインのdatePickerの設定諸々
  const checkinConfig = {
    minDate: new Date(),
    maxDate: checkoutDate || afterThereeMonth, // 最大3ヶ月
    minTime: startOfDay(new Date()),
    maxTime:
      getDayOfYear(checkoutDate) === getDayOfYear(checkinDate)
        ? addMinutes(checkoutDate, -30)
        : endOfDay(new Date()),
    onChange: (date: Date) => {
      dispatch({
        type: 'updateCheckin',
        checkinDay: date ? format(date, DAY_FORMAT) : '',
        checkinTime: date ? format(date, TIME_FORMAT) : '',
      })
      setCheckinDate(date)
    },
  }

  // チェックアウトのdatePickerの設定諸々
  const checkoutConfig = {
    minDate: checkinDate || new Date(),
    maxDate: addMonths(new Date(), 3), // 最大3ヶ月
    minTime: checkinDate ? addMinutes(checkinDate, 30) : startOfDay(new Date()),
    maxTime: endOfDay(new Date()),
    onChange: (date: Date) => {
      dispatch({
        type: 'updateCheckout',
        checkoutDay: date ? format(date, DAY_FORMAT) : '',
        checkoutTime: date ? format(date, TIME_FORMAT) : '',
      })
      setCheckoutDate(date)
    },
  }

  //  TODO: いったんここに！あとできれいに直します
  const suggestIndexName = (locale: string | undefined) => {
    if (locale === 'en') {
      return suggestIndexNameEN
    }
    return suggestIndexNameJA
  }

  const clickSuggest = (hit: SearchQuery) => {
    dispatch({ type: 'updateLocation', value: hit })
    locationFormat.Value = hit
    setLocationInput(locationFormat.Format)
  }

  // search button click!
  const clickSearchButton = () => {
    const [loc1] = locationInput.split(' - ')
    const location = loc1 === locationFormat.Location ? locationFormat.Location : loc1
    const address = loc1 === locationFormat.Location ? locationFormat.Address : ''

    push({
      pathname: '/',
      query: paramToQuery({
        ...inputState,
        location,
        address,
      }),
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-4 px-4 py-2.5">
      <InstantSearch indexName={suggestIndexName(locale)} searchClient={suggestClient}>
        <Configure hitsPerPage={4} />
        <SuggestBox
          id="location-input"
          inputText={locationInput}
          placeholder={t('AREA_INPUT.PLACEHOLDER')}
          width="w-72"
          click={clickSuggest}
          change={(e) => setLocationInput(e.target.value)}
        />
      </InstantSearch>
      <div>
        <label
          htmlFor="checkin"
          className="focus-within:outline-none flex rounded-lg border py-2 px-2 text-xs focus-within:ring-2 focus-within:ring-blue-600"
          tabIndex={0}
        >
          <Today className="z-10 fill-green-32cccc" width="20" height="20" />
          <DatePicker
            id="checkin"
            closeOnScroll
            selected={checkinDate}
            dateFormat={DATE_FORMAT}
            timeFormat={TIME_FORMAT}
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
          className="focus-within:outline-none flex items-center rounded-lg border py-2 px-2 text-xs focus-within:ring-2 focus-within:ring-blue-600"
          tabIndex={0}
        >
          <Today className="z-10 fill-green-32cccc" width="20" height="20" />
          <DatePicker
            id="checkout"
            closeOnScroll
            selected={checkoutDate}
            dateFormat={DATE_FORMAT}
            timeFormat={TIME_FORMAT}
            minDate={checkoutConfig.minDate}
            maxDate={checkoutConfig.maxDate}
            minTime={checkoutConfig.minTime}
            maxTime={checkoutConfig.maxTime}
            onChange={checkoutConfig.onChange}
            isClearable
            showTimeSelect
            timeIntervals={timeIntervals}
            placeholderText={t('CHECKOUT.PLACEHOLDER')}
            className="focus:outline-none h-full pl-2"
          />
        </label>
      </div>
      <div className="text-xs">
        <Popover
          placeholder={t('SIZE_A.PLACEHOLDER')}
          value={countSizeA > 0 ? `サイズA × ${countSizeA}` : ''}
          icon={<Luggage className="z-10 fill-green-32cccc" width="20" height="20" />}
          className="w-40 text-left"
        >
          <div className="w-80 p-5">
            <div className="flex items-center">
              <p className="mr-2 font-bold">サイズA</p>
              <button className="px-1" onClick={() => clickSizeA(-1)}>
                <Minus className="fill-green-32cccc" width="20" height="20" />
              </button>
              <span className="w-4 text-center">{countSizeA}</span>
              <button className="px-1" onClick={() => clickSizeA(1)}>
                <Plus className="fill-green-32cccc" width="20" height="20" />
              </button>
            </div>
            <p className="mt-3 text-gray-999">
              最大辺が45cm未満の大きさのお荷物 (リュック、ハンドバッグ、お手荷物など)
            </p>
          </div>
        </Popover>
      </div>
      <div className="text-xs">
        <Popover
          placeholder={t('SIZE_B.PLACEHOLDER')}
          value={countSizeB > 0 ? `サイズB × ${countSizeB}` : ''}
          icon={<Luggage className="z-10 fill-green-32cccc" width="20" height="20" />}
          className="w-40 text-left"
        >
          <div className="w-80 p-5">
            <div className="flex items-center">
              <p className="mr-2 font-bold">サイズB</p>
              <button className="px-1" onClick={() => clickSizeB(-1)}>
                <Minus className="fill-green-32cccc" width="20" height="20" />
              </button>
              <span className="w-4 text-center">{countSizeB}</span>
              <button className="px-1" onClick={() => clickSizeB(1)}>
                <Plus className="fill-green-32cccc" width="20" height="20" />
              </button>
            </div>
            <p className="mt-3 text-gray-999">
              最大辺が45cm未満の大きさのお荷物 (リュック、ハンドバッグ、お手荷物など)
            </p>
          </div>
        </Popover>
      </div>
      <Button
        className="focus:outline-none w-max rounded-lg border py-2.5 px-3 text-xs text-green-32cccc focus:ring-2 focus:ring-blue-600"
        icon={<Search className="fill-green-32cccc" width="20" height="20" />}
        value="検索"
        click={clickSearchButton}
      />
    </div>
  )
}
