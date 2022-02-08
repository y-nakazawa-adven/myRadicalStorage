import DatePicker from 'react-datepicker'
import { useState } from 'react'

import { Search } from '@components/Icons/Search'
import { Today } from '@components/Icons/Today'
import { addMinutes, addMonths, endOfDay, getDayOfYear, startOfDay } from 'date-fns'

export const SearchBar = () => {
  const [checkinDate, setCheckinDate] = useState<Date>()
  const [checkoutDate, setCheckoutDate] = useState<Date>()
  return (
    <div className="flex items-center">
      <label htmlFor="area-input" className="relative" tabIndex={0}>
        <div className="absolute inset-y-0 left-0 pt-2.5 pl-3">
          <Search className="fill-green-32cccc" width="20" height="20" />
        </div>

        <input
          id="area-input"
          type="text"
          className="focus:outline-none rounded-lg border py-2.5 pl-8 pr-2 text-sm focus:ring-2 focus:ring-blue-600"
          placeholder="エリア"
          tabIndex={-1}
        />
      </label>
      <div>
        <label
          htmlFor="checkin"
          className="focus-within:outline-none flex rounded-lg border py-2.5 px-2 text-sm focus-within:ring-2 focus-within:ring-blue-600"
          tabIndex={0}
        >
          <Today className="z-10 fill-green-32cccc" width="20" height="20" />
          <DatePicker
            id="checkin"
            closeOnScroll
            selected={checkinDate}
            dateFormat="yyyy/MM/dd H:mm"
            minDate={new Date()}
            maxDate={checkoutDate || addMonths(new Date(), 3)}
            minTime={startOfDay(new Date())}
            maxTime={
              checkoutDate &&
              checkinDate &&
              getDayOfYear(checkoutDate) === getDayOfYear(checkinDate)
                ? addMinutes(checkoutDate, -30)
                : endOfDay(new Date())
            }
            onChange={(date: Date) => setCheckinDate(date)}
            isClearable
            showTimeSelect
            timeIntervals={30}
            placeholderText="チェックイン"
            className="focus:outline-none pl-2"
          />
        </label>
      </div>
      <div>
        <label
          htmlFor="checkout"
          className="focus-within:outline-none flex rounded-lg border py-2.5 px-2 text-sm focus-within:ring-2 focus-within:ring-blue-600"
          tabIndex={0}
        >
          <Today className="z-10 fill-green-32cccc" width="20" height="20" />
          <DatePicker
            id="checkout"
            closeOnScroll
            selected={checkoutDate}
            dateFormat="yyyy/MM/dd H:mm"
            minDate={checkinDate || new Date()}
            maxDate={addMonths(new Date(), 3)}
            minTime={
              checkoutDate &&
              checkinDate &&
              getDayOfYear(checkoutDate) === getDayOfYear(checkinDate)
                ? addMinutes(checkinDate, 30)
                : startOfDay(new Date())
            }
            maxTime={endOfDay(new Date())}
            onChange={(date: Date) => setCheckoutDate(date)}
            isClearable
            showTimeSelect
            timeIntervals={30}
            placeholderText="チェックアウト"
            className="focus:outline-none pl-2"
          />
        </label>
      </div>
      <div>
        荷物
        <input type="text" />
      </div>
    </div>
  )
}
