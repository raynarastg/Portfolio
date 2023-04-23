import { globalStyles } from '@/stitches.config';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return <>
    <Head>
    <title>Raynara Santiago | Desenvolvedora Full Stack</title>
    </Head>
  <Component {...pageProps} />
  </>
}
