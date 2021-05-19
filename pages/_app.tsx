import { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Chat Application with Next.js</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
