import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/sidebar.css';
import '../styles/easyTrip.css'

import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
