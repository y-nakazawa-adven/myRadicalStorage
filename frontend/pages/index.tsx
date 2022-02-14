import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@components/Page'
import { SearchContainer } from '@components/Layout'
import { Map } from '@features/map'
import { SearchList } from '@features/searchList'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'header',
        'searchBar',
        'searchList',
        'searchFiltering',
      ])),
    },
    revalidate: 3600,
  }
}

const Home: NextPage = () => {
  const head = { title: 'testですー', description: 'テストですー' }
  return <Page {...head}>{SearchContainer(<SearchList />, <Map />)}</Page>
}

export default Home
