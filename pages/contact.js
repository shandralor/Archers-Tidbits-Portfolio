import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import CookieConsent from "react-cookie-consent";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Contact />
      <CookieConsent
        
        location="bottom"
        extraCookieOptions={{ domain: "archerstidbits.eu" }}
        buttonText="Accept"
        enableDeclineButton
        onDecline={() => {
          alert("Cookies have been declined.");
        }}
        cookieName="Archers_Tidbits_data"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        overlay
      >
        <span className="text-center">This website uses cookies to enhance the user experience.{" "}</span>
        
      </CookieConsent>
    </div>
  )
}
