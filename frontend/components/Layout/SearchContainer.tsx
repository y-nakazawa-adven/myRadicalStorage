import { Header } from '@features/header'
import { SearchBar } from '@features/searchBar'

export const SearchContainer = (left: JSX.Element, right: JSX.Element) => {
  return (
    <>
      <Header />
      <SearchBar />
      <main className="flex h-searchContainer items-start justify-center px-4">
        <div className="h-full w-2/6">{left}</div>
        <div className="h-full w-4/6">{right}</div>
      </main>
    </>
  )
}
