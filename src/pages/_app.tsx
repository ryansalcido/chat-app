import "../styles/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import Layout from "../components/Layout";

// Override 'next-auth' base path for API
const basePath = `${process.env.BASE_PATH}/api/auth`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Chat Application with Next.js</title>
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
      </Head>
      <Provider session={pageProps.session} options={{ basePath }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
