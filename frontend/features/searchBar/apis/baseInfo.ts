// お金がかかっちゃうので、ダミーでどうぞ
// const baseInfoRequest = async (locale: string | undefined) =>
//   await axios.get(`/baseinfo?langCode=${locale}`)
export const baseInfoRequest = async (_: unknown) => ({
  data: [
    { id: 3, name: '電源利用可能', langCode: 'ja' },
    { id: 5, name: '英語OK', langCode: 'ja' },
    { id: 1, name: 'エレベータあり', langCode: 'ja' },
    { id: 2, name: 'WIFI利用可能', langCode: 'ja' },
    { id: 4, name: 'タバコの分別あり', langCode: 'ja' },
  ],
})
