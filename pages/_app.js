import Head from "next/head";
import "../styles/globals.css";

import Header from "../components/Header";

import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container bg-gradient-to-r from-indigo-500 h-screen pt-8 ">
      <Head>
        <title>Jelly Prophet App</title>
        <meta
          name="description"
          content="App for price prediction on blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MoralisProvider initializeOnMount={false}>
        <Header />
        <Component {...pageProps} />
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
