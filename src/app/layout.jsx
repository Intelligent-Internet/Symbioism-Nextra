/* eslint-env node */
import { Footer as NextraFooter, Layout, Navbar } from 'nextra-theme-docs'
import './globals.css'
import { Montserrat, Nunito_Sans } from 'next/font/google'
import Link from 'next/link'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { headers } from 'next/headers'
import Footer from '../components/Footer'
import 'nextra-theme-docs/style.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from 'next/image'
import StarryBackground from '../components/StarryBackground'

export const openGraphImage = 'https://webstatics.ii.inc/TLE_OGImage.png'

export async function generateMetadata({ params }) {
  const heads = headers()
  const pathname = heads.get('next-url')
  const canonicalUrl = `https://www.thelasteconomy.com${pathname}`

  return {
    metadataBase: new URL('https://www.thelasteconomy.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    title: {
      default: 'The Last Economy',
    template: '%s - The Last Economy'
    },
    description: 'A Third Path for the Intelligence Age',
    applicationName: 'The Last Economy',
    generator: 'Next.js',
    appleWebApp: {
      title: 'The Last Economy'
    },
    openGraph: {
      title: 'The Last Economy',
      description: 'A Third Path for the Intelligence Age',
      url: 'https://www.thelasteconomy.com',
      siteName: 'The Last Economy',
      images: [openGraphImage],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The Last Economy',
      description: 'A Third Path for the Intelligence Age',
      images: [openGraphImage],
      site: '@EMostaque'
    }
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
            <b style={{ color: '#BAE9F4' }}>The Last Economy</b>
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
        <StarryBackground starCount={200} />
        <div className="relative z-10">
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
          </Layout>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-00VHQ8C00W" />
      </body>
    </html>
  )
}
