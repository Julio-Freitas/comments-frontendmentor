import { Theme } from 'styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/reset';
import { ProviderNotification } from '../context';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ProviderNotification>
        <Component {...pageProps} />
      </ProviderNotification>
    </ThemeProvider>
  );
}
