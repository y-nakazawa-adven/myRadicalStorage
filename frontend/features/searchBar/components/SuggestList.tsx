import { Hit, HitsProvided } from 'react-instantsearch-core'
import { connectHits } from 'react-instantsearch-dom'
import { SearchQuery } from '@features/searchBar'

type Props = HitsProvided<Hit<SearchQuery>> & {
  click: (hit: SearchQuery) => void
  isOpen: boolean
  width: string
}

export const SuggestList = connectHits<Props, Hit<SearchQuery>>(
  ({ hits, click, isOpen, width }) => {
    const isExist = Object.keys(hits).length > 0
    return (
      <div tabIndex={0}>
        {isOpen && isExist && (
          <div className={`absolute left-0 z-20 mt-1 rounded-md border bg-white ${width}`}>
            <ul className="flex flex-col gap-4 px-4 py-6">
              {hits!.map((hit: SearchQuery) => (
                <li
                  className="flex cursor-pointer hover:font-bold"
                  onClick={() => click(hit)}
                  key={hit.objectID}
                >
                  <p className="font-Mulish ml-2.5 truncate text-sm">
                    {hit.location} - {hit.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
)
