import Head from 'next/head'
import { Inter } from 'next/font/google'
import MainContainer from '@containers/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pass3Messenger</title>
        <meta name="description" content="SendMessageToWeb3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
    </>
  )
}
