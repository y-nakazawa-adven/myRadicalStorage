import { Hit, HitsProvided } from 'react-instantsearch-core'
import { connectHits } from 'react-instantsearch-dom'

type HitDoc = {
  objectID: string
  city: string
  country: string
  icon?: string
}

type Props = HitsProvided<Hit<HitDoc>> & {
  click: () => void
  width: string
}

export const SuggestList = connectHits<Props, Hit<HitDoc>>(({ hits, click, width }) => {
  const isExist = Object.keys(hits).length > 0
  return (
    <div>
      {isExist && (
        <div className={`absolute left-0 mt-1 rounded-md border bg-white ${width}`}>
          <ul className="px-4 py-6">
            {/* {hits!.map((hit: HitDoc) => (
        <li
          className="mb-9 flex cursor-pointer hover:font-bold"
          onClick={() => click()}
          key={hit.objectID}
        >
          <p className="font-Mulish ml-2.5 text-sm">
            {hit.city}, {hit.country}
          </p>
        </li>
      ))} */}

            <li
              className="mb-4 flex cursor-pointer hover:font-bold"
              onClick={() => click()}
              key="1"
            >
              <p className="font-Mulish ml-2.5 text-xs">testtest</p>
            </li>
            <li className="flex cursor-pointer hover:font-bold" onClick={() => click()} key="2">
              <p className="font-Mulish ml-2.5 text-xs">testtest2</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
})
