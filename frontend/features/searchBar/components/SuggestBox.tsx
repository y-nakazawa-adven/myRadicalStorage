import { useEffect, useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'
import cn from 'classnames'

import { SuggestList } from './SuggestList'
import useDebounce from '@libs/hooks/useDebounce'
import { Search } from '@components/Icons'
import { InputField } from '@components/Form'
import { SearchQuery } from '@features/searchBar'

interface Props extends SearchBoxProvided {
  id: string
  placeholder?: string
  inputText: string
  width: string
  className?: string
  click: (hit: SearchQuery) => void
  change: (event: { target: HTMLInputElement }) => void
}

export const SuggestBox = connectSearchBox(
  ({ id, placeholder, inputText, width, className, click, change, refine }: Props) => {
    const debouncedInputText = useDebounce<string>(inputText, 1000)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      refine(debouncedInputText)
    }, [debouncedInputText])

    const clickWrap = (hit: SearchQuery) => {
      setIsOpen(!isOpen)
      click(hit)
    }
    const changeWrap = (event: { target: HTMLInputElement }) => {
      if (!!event.target.value && inputText !== event.target.value) {
        setIsOpen(true)
      }
      change(event)
    }

    return (
      <div
        className={cn('relative', className)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false)
        }}
      >
        <InputField
          id={id}
          icon={<Search className="fill-green-32cccc" width="20" height="20" />}
          placeholder={placeholder}
          value={inputText}
          width={width}
          change={changeWrap}
        />
        <SuggestList click={clickWrap} width={width} isOpen={isOpen} />
      </div>
    )
  },
)
