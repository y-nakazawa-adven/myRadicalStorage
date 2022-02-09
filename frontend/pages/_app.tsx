import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '@styles/globals.css'
import '@styles/custom-react-datepicker.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default appWithTranslation(App)
