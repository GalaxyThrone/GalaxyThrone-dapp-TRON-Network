import Head from "next/head";
import Layout from "../components/_shared/Layout";
import { GalaxygonProvider } from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GalaxygonProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GalaxygonProvider>
  );
}

export default MyApp;
