import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}
