import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@components/Page'
import { SearchContainer } from '@components/Layout'
import { SearchList, Map, useSearchProperties, PropertyForSearch } from '@features/searchList'
import { baseInfoRequest } from '@features/searchBar'
import { useRouter } from 'next/router'
import { queryToParam } from '@libs/utils/common'
import { useEffect } from 'react'

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
  const [properties, dispatch] = useSearchProperties()
  console.log('page baseInfo:', baseInfo, properties)
  useEffect(() => {
    dispatch({
      type: 'updateProperties',
      value: [
        {
          objectID: 'a',
          name: '施設名A',
          imageUrl: '/images/dummy_600_400.png',
          reviewRate: 4.5,
          category: 'CITY',
          baseInfo: ['エレベータあり', '英語OK'],
          nearest: '東京駅から徒歩100分',
          _geoloc: {
            lat: 35.681115698235644,
            lng: 139.77376393957235,
          },
        },
      ],
    })
  }, [])
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
