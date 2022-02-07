import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@components/Page'
import { Header } from 'features/header/components/Header'
import { SearchBar } from 'features/searchBar/components/SearchBar'
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common', 'header'])) },
    revalidate: 3600,
  }
}
const Home: NextPage = () => {
  return (
    <Page>
      <Header />
      <SearchBar />
      <p>start</p>
    </Page>
  )
}

export default Home
