import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Heebo&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }