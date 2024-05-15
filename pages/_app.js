import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (
  <>
  <Head>
        <link rel="icon" href="./assets/brainwave-symbol.svg" />
        <title>Brainwave</title>

      </Head>
  <Component {...pageProps} />
  </>)
}
