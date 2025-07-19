/* eslint-env node */
import { Footer as NextraFooter, Layout, Navbar } from 'nextra-theme-docs'
import './globals.css'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Footer from '../components/Footer'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://symbioism.com'),
  title: {
    template: '%s - Symbioism'
  },
  description: 'Symbioism',
  applicationName: 'Symbioism',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Symbioism'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://x.com/EMostaque'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b style={{ color: '#BAE9F4' }}>Symbioism</b>
        </div>
      }
      projectLink="https://github.com/Intelligent-Internet/Symbioism-Nextra"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
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
      </body>
    </html>
  )
}
