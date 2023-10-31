import LayoutModule from '@/modules/LayoutModule'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'animate.css';

export default function App({ Component, pageProps }: AppProps) {
  return <LayoutModule><Component {...pageProps} /></LayoutModule>
}
