import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@components/Page'
import { SearchContainer } from '@components/Layout'
import { SearchList, Map, useSearchProperties, PropertyForSearch } from '@features/searchList'
import { baseInfoRequest } from '@features/searchBar'
import { useRouter } from 'next/router'
import { queryToParam } from '@libs/utils/common'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translationRequest = async (locale: string | undefined) =>
    await serverSideTranslations(locale as string, [
      'common',
      'header',
      'searchBar',
      'searchList',
      'searchFiltering',
    ])
  const [baseInfoRes, transRes] = await Promise.all([
    baseInfoRequest(locale),
    translationRequest(locale),
  ])
  return {
    props: {
      baseInfo: baseInfoRes.data,
      ...transRes,
    },
    revalidate: 3600,
  }
}

const Home: NextPage = ({ baseInfo }: any) => {
  console.log(baseInfo)
  const [properties, dispatch] = useSearchProperties()
  const { query } = useRouter()
  const head = { title: 'testですー', description: 'テストですー' }
  return (
    <Page {...head}>
      {SearchContainer(
        <SearchList properties={properties} dispatch={dispatch} />,
        <Map query={queryToParam(query)} properties={properties} dispatch={dispatch} />,
      )}
    </Page>
  )
}

export default Home
