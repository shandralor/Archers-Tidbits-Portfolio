import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Contact />
    </div>
  )
}
