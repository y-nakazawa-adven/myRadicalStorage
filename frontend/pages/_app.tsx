import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import 'tailwindcss/tailwind.css'
import '@styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
export default appWithTranslation(App)
