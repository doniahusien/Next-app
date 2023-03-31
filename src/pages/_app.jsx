import '@/styles/globals.css'
import { Fragment } from 'react'
import Layout from '../../Layout/layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component{...pageProps} />)
  }
  return (
    <Fragment>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      
      
    </Fragment>
    
  )
}
