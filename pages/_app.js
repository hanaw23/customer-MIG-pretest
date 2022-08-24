import Head from "next/dist/shared/lib/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Customer Management|API manage </title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
