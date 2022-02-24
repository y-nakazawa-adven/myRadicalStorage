import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@components/Page'
import { SearchContainer } from '@components/Layout'
import { SearchList, Map } from '@features/searchList'
import { axios } from '@lib/api/axios'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const baseInfoRequest = async (locale: string | undefined) =>
    await axios.get(`/baseinfo?langCode=${locale}`)
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
  const head = { title: 'testですー', description: 'テストですー' }
  return <Page {...head}>{SearchContainer(<SearchList />, <Map />)}</Page>
}

export default Home
