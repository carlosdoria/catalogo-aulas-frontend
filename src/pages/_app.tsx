// import App from "next/app";
import { AppProps /* , AppContext */ } from 'next/app'
import Head from 'next/head'
import { Header } from 'components'
import { UserProvider } from 'hooks/useUser'

import { GlobalStyles } from '../styles/globals'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="My boilerplete" />
      </Head>
      <GlobalStyles />
      <UserProvider>
        <Header />
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
