'use client'

import { Footer, Header } from 'chora/components'
import { ThemeContextProvider } from 'chora/contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
    <body>
      <main>
        <ThemeContextProvider>
          <Header
            title={{
              link: '/',
              titleX: 'blog',
            }}
            itemsLeft={[
              {
                link: '/news',
                title: 'news',
              },
              {
                link: '/research',
                title: 'research',
              },
            ]}
          />
          {children}
          <Footer
            lists={[
              {
                title: 'chora studio',
                items: [
                  {
                    link: 'https://chora.studio/products',
                    target: '_blank',
                    title: 'products ↗',
                  },
                  {
                    link: 'https://chora.studio/solutions',
                    target: '_blank',
                    title: 'solutions ↗',
                  },
                  {
                    link: 'https://chora.studio/validator',
                    target: '_blank',
                    title: 'validator ↗',
                  },
                ],
              },
              {
                title: 'chora protocol',
                items: [
                  {
                    link: 'https://chora.io',
                    target: '_blank',
                    title: 'chora applications ↗',
                  },
                  {
                    link: 'https://docs.chora.io',
                    target: '_blank',
                    title: 'chora documentation ↗',
                  },
                  {
                    link: 'https://github.com/chora-io',
                    target: '_blank',
                    title: 'chora repositories ↗',
                  },
                ],
              },
              {
                title: 'chora validator',
                items: [
                  {
                    link: 'https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e',
                    target: '_blank',
                    title: 'regen ↗',
                  },
                  {
                    link: 'https://chora.io/scan/regen-redwood-1',
                    target: '_blank',
                    title: 'regen-redwood ↗',
                  },
                  {
                    link: 'https://chora.io/scan/chora-testnet-1',
                    target: '_blank',
                    title: 'chora-testnet ↗',
                  },
                ],
              },
            ]}
          />
        </ThemeContextProvider>
      </main>
    </body>
  </html>
)

export default Layout
