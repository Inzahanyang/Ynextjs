import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Y next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
