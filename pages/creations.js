
import Creations from '@/components/Creations'
import Navbar from '@/components/Navbar'
import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Creations </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <Creations />
     
    </div>
  )
}
