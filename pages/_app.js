import '@/styles/globals.css'
import { ClosedNotice } from '@/components/ClosedNotice'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ClosedNotice />
    </>
  )
}
