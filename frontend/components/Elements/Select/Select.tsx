/* いったん形だけ実装 */
import { useState } from 'react'

import { ArrowDropDown, ArrowDropUp } from '@components/Icons'

export type option = {
  boldText: string // テキスト前に表示されるboldの文字
  text: string // text
  value: string // value
}
export type Props = {
  selectedValue: string // 選択中の値
  title: string // セレクトボックス内のタイトル
  options: option[] // option
  columns?: number // セレクトボックス内で表示される列数
  click: (value: string) => void
}
export const Select = ({ selectedValue, title, options, columns = 1, click }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const gridClass = `grid grid-cols-${columns} gap-1 text-sm`
  return (
    <div className="relative">
      <button
        className="flex items-center rounded-md bg-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">{selectedValue}</span>
        {isOpen ? (
          <ArrowDropUp className="fill-green-32cccc" />
        ) : (
          <ArrowDropDown className="fill-green-32cccc" />
        )}
      </button>
      {isOpen ? (
        <div className="absolute right-0 mt-2 w-max rounded-md bg-white p-2 shadow-md">
          {title === '' ? '' : <p className="my-4 text-sm font-bold">{title}</p>}
          <ul className={gridClass}>
            {options.map((option: option) => (
              <li
                className="cursor-pointer rounded py-1 px-2 hover:bg-gray-100"
                onClick={() => {
                  click(option.value)
                  setIsOpen(!isOpen)
                }}
              >
                <span className="mr-1 font-bold">{option.boldText}</span>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
