import { useEffect } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'

import { SuggestList } from '@features/searchBar/components/SuggestList'
import useDebounce from '@lib/hooks/useDebounce'
import { Search } from '@components/Icons'

interface Props extends SearchBoxProvided {
  id?: string
  placeholder?: string
  inputText: string
  width: string
  change: (event: { target: HTMLInputElement }) => void
}

export const SuggestBox = connectSearchBox(
  ({ id, placeholder, inputText, width, change, refine }: Props) => {
    const debouncedInputText = useDebounce<string>(inputText, 1000)
    const clickSuggest = () => {
      console.log('click suggest item!')
    }
    useEffect(() => {
      refine(debouncedInputText)
    }, [debouncedInputText])

    return (
      <div className="relative">
        <label htmlFor={id} className="relative" tabIndex={0}>
          <div className="absolute inset-y-0 left-0 pl-2">
            <Search className="fill-green-32cccc" width="20" height="20" />
          </div>
          <input
            id={id}
            type="text"
            className={`focus:outline-none rounded-lg border py-2.5 pl-8 pr-2 text-sm focus:ring-2 focus:ring-blue-600 ${width}`}
            placeholder={placeholder}
            value={inputText}
            onChange={(e) => {
              change(e)
            }}
          />
        </label>
        <SuggestList click={clickSuggest} width={width} />
      </div>
    )
  },
)
