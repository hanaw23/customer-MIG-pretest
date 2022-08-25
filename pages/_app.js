import Head from "next/head";

import "../styles/globals.css";
import { wrapper } from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MIG-Pretest | Customer Management</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default wrapper.withRedux(MyApp);
