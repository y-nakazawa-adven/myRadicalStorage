import { Header } from 'features/header/components/Header'

type Props = {
  children: React.ReactNode
}
export const Layout = ({ children }: Props) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)
