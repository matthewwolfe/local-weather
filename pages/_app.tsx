import '@bedrock-ui/core/css/bedrock-ui.css';
import 'chart.js/auto';

import Head from 'next/head';
import React, { FC } from 'react';

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
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;
