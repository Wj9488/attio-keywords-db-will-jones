import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Attio Keywords by Will Jones</title>
    </Head>
    <div className={`${inter.className}`}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}
