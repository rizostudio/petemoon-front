import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://static.neshan.org/sdk/openlayers/5.3.0/ol.css"
            rel="stylesheet"
            type="text/css"
          /> */}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <div id="myportal" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
          {/* <script
            type="text/javascript"
            src="https://static.neshan.org/api/web/v1/openlayers/v4.6.5.js"
          ></script> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
