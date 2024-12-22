import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useEffect } from "react";
import Layout from "@/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {

    if (typeof document !== 'undefined') {
      //@ts-ignore
      import('bootstrap/dist/js/bootstrap.min.js');
     
    }
  }, []);
  return (

    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>)

}
