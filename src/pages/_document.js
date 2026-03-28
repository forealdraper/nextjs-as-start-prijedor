import { Html, Head, Main, NextScript } from "next/document";

const GTM_ID = "GTM-KW648C4";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/cropped-favicon-150x150.png" sizes="32x32" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:image" content="/auta.png" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Auto Škola Start Prijedor - Driving School Start Prijedor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
