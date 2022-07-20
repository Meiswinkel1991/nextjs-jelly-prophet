import Head from "next/head";
import "../styles/globals.css";

import Header from "../components/Header";

import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" bg-primary h-screen  ">
      <Head>
        <title>Jelly Prophet App</title>
        <meta
          name="description"
          content="App for price prediction on blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <div className="container ">
            <Header />
            <Component {...pageProps} />
          </div>
        </NotificationProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
