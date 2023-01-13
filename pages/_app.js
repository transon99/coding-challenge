import store from '@/app/store'
import { EmptyLayout } from '@/components/layout'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  )
}
