import { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Chat Application with Next.js</title>
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
};

export default MyApp;
