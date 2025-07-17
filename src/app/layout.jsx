/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import './globals.css'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
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
    site: 'https://nextra.site'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Symbioism</b>{' '}
        </div>
      }
      projectLink="https://gitlab.com/inkscape/inkscape"
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
          footer={<Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          nextThemes={{ forcedTheme: 'dark' }}
          darkMode={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
