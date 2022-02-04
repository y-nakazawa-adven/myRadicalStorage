/* いったん形だけ実装 */
export const Select = () => (
  <div className="relative">
    <button className="flex items-center rounded-md bg-white  p-2">
      <span className="mr-4">¥ </span>
    </button>
    <div className="absolute right-0 mt-2 min-w-580px rounded-md bg-white p-2 shadow-md">
      <p className="my-4 text-sm font-bold">その他の通貨</p>
      <div className="grid grid-cols-6 gap-4 text-sm">
        <div className="cursor-pointer rounded py-1 px-2 hover:bg-gray-100">
          <p>
            <span className="font-bold">¥</span> JPY
          </p>
        </div>
        <div className="cursor-pointer rounded py-1 px-2 hover:bg-gray-100">
          <p>
            <span className="font-bold">$</span> USD
          </p>
        </div>
      </div>
    </div>
  </div>
)
