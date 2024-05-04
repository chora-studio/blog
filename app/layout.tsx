import { Background, Footer, Header, Sidebar } from 'chora/components'
import { MenuContextProvider, ThemeContextProvider } from 'chora/contexts'

import './globals.css'

const Layout = ({ children }: any) => (
  <html lang="en">
    <body>
      <ThemeContextProvider>
        <MenuContextProvider>
          <Background />
          <Header
            title={{
              link: '/',
              titleX: 'blog',
            }}
            items={[
              {
                link: '/news',
                title: 'news',
              },
              {
                link: '/research',
                title: 'research',
              },
            ]}
            showMenuButton={true}
          />
          <Sidebar
            items={[
              {
                link: '.',
                target: '',
                title: 'home',
              },
              {
                link: 'news',
                target: '',
                title: 'news',
              },
              {
                link: 'research',
                target: '',
                title: 'research',
              },
              'divider',
              {
                link: 'https://chora.studio',
                target: '_blank',
                title: 'chora studio',
              },
              {
                link: 'https://chora.io',
                target: '_blank',
                title: 'chora software',
              },
              {
                link: 'https://chora.studio/validator',
                target: '_blank',
                title: 'chora validator',
              },
            ]}
            mobileOnly={true}
          />
          <main>{children}</main>
          <Footer
            sections={[
              {
                title: 'chora studio',
                items: [
                  {
                    link: 'https://chora.studio/products',
                    target: '_blank',
                    title: 'products',
                  },
                  {
                    link: 'https://chora.studio/solutions',
                    target: '_blank',
                    title: 'solutions',
                  },
                  {
                    link: 'https://chora.studio/validator',
                    target: '_blank',
                    title: 'validator',
                  },
                ],
              },
              {
                title: 'chora software',
                items: [
                  {
                    link: 'https://chora.io',
                    target: '_blank',
                    title: 'applications',
                  },
                  {
                    link: 'https://docs.chora.io',
                    target: '_blank',
                    title: 'documentation',
                  },
                  {
                    link: 'https://github.com/chora-io',
                    target: '_blank',
                    title: 'repositories',
                  },
                ],
              },
              {
                title: 'chora validator',
                items: [
                  {
                    link: 'https://www.mintscan.io/regen/validators/regenvaloper1t8p3zdu3h8qzggfmvvvmtdnaj4trcsfh79xp4e',
                    target: '_blank',
                    title: 'regen',
                  },
                  {
                    link: 'https://chora.io/ledger',
                    target: '_blank',
                    title: 'regen-redwood',
                  },
                  {
                    link: 'https://chora.io/scan/ledger',
                    target: '_blank',
                    title: 'chora-testnet',
                  },
                ],
              },
            ]}
          />
        </MenuContextProvider>
      </ThemeContextProvider>
    </body>
  </html>
)

export default Layout
