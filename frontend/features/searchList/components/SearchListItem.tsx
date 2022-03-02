import { Rating } from '@components/Elements'
import { Cycle } from '@components/Icons'
import { Star } from '@components/Icons'
import { PropertyCategory, PropertyForSearch } from '@features/searchList'
import { useTranslation } from 'next-i18next'

type Props = Partial<PropertyForSearch>
export const SearchListItem = ({
  imageUrl,
  name,
  reviewRate,
  category,
  baseInfo,
  nearest,
}: Props) => {
  const { t } = useTranslation('searchList')

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
          <div className="flex flex-row items-center justify-start">
            <Rating
              filledClassName="fill-yellow-ffbf00"
              emptyClassName="fill-gray-c0c0c0"
              width={18}
              height={18}
              rate={reviewRate || 0}
            />
            {/* <Star className="fill-yellow-400" width="18" height="18" /> */}

            <p className="ml-2 text-xs">{reviewRate}</p>
          </div>
        </div>
        <p className="flex flex-row items-center justify-start text-xs">
          {categoryView(category)}
          <span className="ml-1">{t(`CATEGORY.${category}`)}</span>
        </p>
        {baseInfo && baseInfo.length > 0 && (
          <ul className="flex flex-row flex-wrap justify-start gap-1 text-xs">
            {baseInfo.map((s, i) => (
              <li className="truncate rounded-2xl border px-2 py-0.5" key={`baseInfo-${i}`}>
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
