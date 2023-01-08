import { EmptyLayout } from '@/components/layout'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout ?? EmptyLayout
  return (<SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>)
}
