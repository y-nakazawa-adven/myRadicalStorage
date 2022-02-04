/*
 * https://github.com/garmeeh/next-seo
 * headを設定するコンポーネント
 * ogpとか設定するならここで
 */
import { NextSeo } from 'next-seo'

type Props = {
  title?: string
  description?: string
  children: React.ReactNode
}
export const Page = ({ title, description, children }: Props) => (
  <>
    <NextSeo title={title} description={description} />
    {children}
  </>
)
