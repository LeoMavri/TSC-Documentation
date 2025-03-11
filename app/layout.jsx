import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
	title: "Torn Spies Central Documentation"
}
 
const banner = <Banner storageKey="tsc-banner">TODO</Banner>
const navbar = (
  <Navbar
    logo={<b>Torn Spies Central</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>diicot.cc - GNU GPL v3</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/LeoMavri/TSC-Documentation/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}