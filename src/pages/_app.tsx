import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components/layout/Layout";
import { store } from "../services/redux/store/store";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>IQRA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
