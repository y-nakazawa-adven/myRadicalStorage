import { Cycle } from '@components/Icons'
import { Star } from '@components/Icons'
import { PropertyCategory, PropertyForSearch } from '@features/searchList'
import Rating from 'react-rating'

type Props = Partial<PropertyForSearch>
export const SearchListItem = ({
  imageUrl,
  name,
  reviewRate,
  category,
  baseInfo,
  nearest,
}: Props) => {
  const categoryView = (category: PropertyCategory | undefined) => {
    if (category === 'CITY') return <Cycle className="fill-green-32cccc" width="18" height="18" />
    if (category === 'STATION')
      return <Cycle className="fill-green-32cccc" width="18" height="18" />
    return <Cycle className="fill-green-32cccc" width="18" height="18" />
  }
  return (
    <>
      <img src={imageUrl} alt="dummy image" className=" max-w-32 object-cover" />
      <div className="flex flex-col justify-start gap-2 px-2 py-4">
        <div>
          <p className="text-sm font-bold">{name}</p>
          <ul className="flex flex-row items-center justify-start">
            <Rating
              readonly
              initialRating={reviewRate}
              emptySymbol={<Star className="fill-gray-c0c0c0" width="18" height="18" />}
              fullSymbol={<Star className="fill-yellow-400" width="18" height="18" />}
            />
            <li>
              <p className="ml-2 text-xs">{reviewRate}</p>
            </li>
          </ul>
        </div>
        <p className="flex flex-row items-center justify-start text-xs">
          <Cycle className="fill-green-32cccc" width="18" height="18" />
          <span className="ml-1">{categoryView(category)}</span>
        </p>
        {baseInfo && baseInfo.length > 0 && (
          <ul className="flex flex-row flex-wrap justify-start gap-1 text-xs">
            {baseInfo.map((s, i) => (
              <li className="truncate rounded-2xl border px-2 py-0.5" key={`star-${i}`}>
                {s}
              </li>
            ))}
          </ul>
        )}
        <p className="truncate text-xs">{nearest}</p>
      </div>
    </>
  )
}
