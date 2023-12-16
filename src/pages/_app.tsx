import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { initGA, logPageView } from "../../service/ga";
import Script from "next/script";

// globals.d.ts
interface Window {
  GA_INITIALIZED?: boolean;
}


declare let window: Window;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SVNSQB3XBT" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SVNSQB3XBT');
          `}
        </Script>
      </div>
    </>
  );
}
