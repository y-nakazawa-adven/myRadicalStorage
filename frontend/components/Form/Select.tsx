/* いったん形だけ実装 */
import { useState } from 'react'

import { ArrowDropDown, ArrowDropUp } from '@components/Icons'
import { isString } from '@libs/utils/common'

export type option = {
  boldText?: string // テキスト前に表示されるboldの文字
  text: string // text
  value: string // value
  icon?: string // icon's url
  alt?: string
}

export type Props = {
  selectedValue: string // 選択中の値
  title?: string // セレクトボックス内のタイトル
  options: option[] // option
  columns?: number // セレクトボックス内で表示される列数
  click: (value: string) => void
}

export const Select = ({ selectedValue, title = '', options, columns, click }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const gridClass = `grid grid-cols-${columns} gap-1 text-sm`
  const selectedOption = options.find((option: option) => option.value === selectedValue) || {
    text: '',
    value: '',
  }

  return (
    <div className="relative" onBlur={() => setIsOpen(false)}>
      <button
        className="flex items-center justify-center rounded-md bg-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isString(selectedOption.icon) && (
          <img width="24" src={selectedOption.icon} alt={selectedOption.alt} className="mr-1" />
        )}
        <span className="mr-1">{selectedOption && selectedOption.value}</span>
        {isOpen ? (
          <ArrowDropUp className="fill-green-32cccc" />
        ) : (
          <ArrowDropDown className="fill-green-32cccc" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-max rounded-md bg-white p-2 shadow-md">
          {isString(title) && <p className="my-4 text-sm font-bold">{title}</p>}
          <ul className={gridClass}>
            {options.map((option: option) => (
              <li
                key={option.value}
                className="flex cursor-pointer items-center rounded py-1 px-2 hover:bg-gray-100"
                onMouseDown={() => {
                  click(option.value)
                  setIsOpen(!isOpen)
                }}
              >
                {isString(option.icon) && (
                  <img src={option.icon} alt={option.alt} className="mr-1" />
                )}
                {isString(option.boldText) && (
                  <span className="mr-1 font-bold">{option.boldText}</span>
                )}
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
