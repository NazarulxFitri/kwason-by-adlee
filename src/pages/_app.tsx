import LayoutModule from "@/modules/LayoutModule";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "animate.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LayoutModule>
        <Component {...pageProps} />
      </LayoutModule>
    </RecoilRoot>
  );
}
