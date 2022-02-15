import { useEffect } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'
import cn from 'classnames'

import { SuggestList } from './SuggestList'
import useDebounce from '@lib/hooks/useDebounce'
import { Search } from '@components/Icons'
import { InputField } from '@components/Form'

interface Props extends SearchBoxProvided {
  id: string
  placeholder?: string
  inputText: string
  width: string
  className?: string
  change: (event: { target: HTMLInputElement }) => void
}

export const SuggestBox = connectSearchBox(
  ({ id, placeholder, inputText, width, className, change, refine }: Props) => {
    const debouncedInputText = useDebounce<string>(inputText, 1000)
    const clickSuggest = () => {
      console.log('click suggest item!')
    }
    useEffect(() => {
      refine(debouncedInputText)
    }, [debouncedInputText])

    return (
      <div className={cn('relative', className)}>
        <InputField
          id={id}
          icon={<Search className="fill-green-32cccc" width="20" height="20" />}
          placeholder={placeholder}
          value={inputText}
          width={width}
          change={change}
        />
        <SuggestList click={clickSuggest} width={width} />
      </div>
    )
  },
)
