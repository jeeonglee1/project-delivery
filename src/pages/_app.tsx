import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BagProvider } from '../providers/BagContext/Provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BagProvider>
      <Component {...pageProps} />
    </BagProvider>
  ) 
}
