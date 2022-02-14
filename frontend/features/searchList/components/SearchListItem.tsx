import { Cycle } from '@components/Icons'
import { Star } from '@components/Icons'

export const SearchListItem = () => {
  return (
    <>
      <img src="/images/dummy_600_400.png" alt="dummy image" className=" max-w-32 object-cover" />
      <div className="flex flex-col justify-start gap-2 px-2 py-4">
        <div>
          <p className="text-sm font-bold">荷物預かりスカイツリー</p>
          <ul className="flex flex-row items-center justify-start">
            <li>
              <Star className="fill-yellow-400" width="18" height="18" />
            </li>
            <li>
              <Star className="fill-yellow-400" width="18" height="18" />
            </li>
            <li>
              <Star className="fill-yellow-400" width="18" height="18" />
            </li>
            <li>
              <Star className="fill-yellow-400" width="18" height="18" />
            </li>
            <li>
              <Star className="fill-gray-c0c0c0" width="18" height="18" />
            </li>
            <li>
              <p className="ml-2 text-xs">4.5</p>
            </li>
          </ul>
        </div>
        <p className="flex flex-row items-center justify-start text-xs">
          <Cycle className="fill-green-32cccc" width="18" height="18" />
          <span className="ml-1">レンタルサービス</span>
        </p>
        <ul className="flex flex-row flex-wrap justify-start gap-1 text-xs">
          <li className="truncate rounded-2xl border px-2 py-0.5">エレベータあり</li>
          <li className="truncate rounded-2xl border px-2 py-0.5">英語OK</li>
          <li className="truncate rounded-2xl border px-2 py-0.5">年中無休</li>
        </ul>
        <p className="truncate text-xs">東京スカイツリーから280メートル</p>
      </div>
    </>
  )
}
