import { Fragment } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

// Override 'next-auth' base path for API route based on dev/prod environment
const basePath = process.env.NODE_ENV === "production" ? "/chat/api/auth" : "/api/auth";

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
