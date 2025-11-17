import { Inter, Source_Sans_3, Source_Serif_4 } from "next/font/google"
import "@/app/globals.css"
import { ReactNode } from "react"
import Script from "next/script"
import BrownBanner from "@/components/BrownBanner"
import Navbar from "@/components/Navbar"
import Acknowledgement from "@/components/Acknowledgement"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata = {
  title: "CBC",
  description: "Computational Biology Core",
}

function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FV92F5H1G4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FV92F5H1G4');
        `}
      </Script>
    </>
  )
}

export default async function RootLayoutWrapper({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} font-sans`}
    >
      <head />
      <GoogleAnalytics />
      <body className={`${inter.className} m-0 p-0 overflow-x-hidden bg-white`}>
        <BrownBanner />
        <Navbar />
        <div className="grow">{children}</div>
        <Acknowledgement />
        <Footer />
      </body>
    </html>
  )
}
