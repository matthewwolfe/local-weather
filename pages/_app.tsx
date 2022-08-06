import '@bedrock-ui/core/css/bedrock-ui.css';
import 'chart.js/auto';

import React, { FC } from 'react';
import Head from 'next/head';

interface Props {
  Component: FC;
  pageProps: Record<string, unknown>;
}

function App({ Component, pageProps }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>Local Weather</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;
