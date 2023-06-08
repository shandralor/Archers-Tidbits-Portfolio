import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <title>About </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
    </div>
  )
}
