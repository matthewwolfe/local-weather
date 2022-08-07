import '@bedrock-ui/core/css/bedrock-ui.css';
import 'chart.js/auto';

import Head from 'next/head';
import React, { FC } from 'react';
import { BreakpointsProvider } from '@bedrock-ui/breakpoints';

interface Props {
  Component: FC;
  pageProps: Record<string, unknown>;
}

const BREAKPOINTS = {
  mobile: 0,
  tablet: 600,
  desktop: 1024,
};

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

      <BreakpointsProvider breakpoints={BREAKPOINTS}>
        <Component {...pageProps} />
      </BreakpointsProvider>
    </React.Fragment>
  );
}

export default App;
