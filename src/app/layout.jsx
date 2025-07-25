/* eslint-env node */
import { Footer as NextraFooter, Layout, Navbar } from 'nextra-theme-docs'
import './globals.css'
import { Montserrat, Nunito_Sans } from 'next/font/google'
import Link from 'next/link'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Footer from '../components/Footer'
import 'nextra-theme-docs/style.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from 'next/image'

export const openGraphImage = '/opengraph-image.png'

export const metadata = {
  metadataBase: new URL('https://symbioism.com'),
  title: {
    default: 'Symbioism',
    template: '%s - Symbioism'
  },
  description: 'A Third Path for the Intelligence Age',
  applicationName: 'Symbioism',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Symbioism'
  },
  openGraph: {
    title: 'Symbioism',
    description: 'A Third Path for the Intelligence Age',
    url: 'https://symbioism.com',
    siteName: 'Symbioism',
    images: [
      {
        url: openGraphImage,
        alt: 'Symbioism Homepage'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Symbioism',
    description: 'A Third Path for the Intelligence Age',
    images: [openGraphImage],
    site: 'https://x.com/EMostaque'
  }
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
});

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center">
          <div className="ml-2">
            <b style={{ color: '#BAE9F4' }}>Symbioism</b>
          </div>
        </div>
      }
      // projectLink="https://github.com/Intelligent-Internet/Symbioism-Nextra"
    >
      <div>
        <Link href="https://ii.inc/web/registration" target="_blank" rel="noopener noreferrer" className="bg-[#BAE9F4] text-black font-bold py-2 px-5 rounded-full text-sm no-underline transition-opacity hover:opacity-80 shadow-[0_10px_30px_0_rgba(186,233,244,0.3)]">
          Sign up
        </Link>
      </div>
    </Navbar>
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head/>
      <body className={`${montserrat.variable} ${nunito_sans.variable}`}>
        <Layout
          // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/Intelligent-Internet/Symbioism-Nextra"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          nextThemes={{ forcedTheme: 'dark' }}
          darkMode={false}
        >
          <main>{children}</main>
          <Footer />
        </Layout>
        <GoogleAnalytics id="G-00VHQ8C00W" />
      </body>
    </html>
  )
}
