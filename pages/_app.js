import "@/styles/globals.css";
import Nav from "@/components/Nav";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
