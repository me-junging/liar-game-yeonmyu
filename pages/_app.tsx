import { getSessionId } from '@/modules/browser/storage'
import '@/styles/globals.scss'
import { nanoid } from 'nanoid'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import styles from './_app.module.scss'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!getSessionId({ initial: true })) {
      sessionStorage.setItem('sessionId', nanoid(10))
    }
  }, [])

  return (
    <>
      <Head>
        <title>라이어 게임</title>
        <meta property="og:title" content="라이어 게임" />
        <meta name="description" content="우리 중 누군가 거짓말을 하고 있다." />
        <meta
          property="og:description"
          content="우리 중 누군가 거짓말을 하고 있다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://liar-game.com/og/open_graph.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div id="app" className={styles.wrapper}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
