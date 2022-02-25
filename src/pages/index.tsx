import Head from 'next/head'
import { Modal } from '../components/molecules'
import { Feed, Header } from '../components/organisms'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Modal />
      <Feed />
    </div>
  )
}
