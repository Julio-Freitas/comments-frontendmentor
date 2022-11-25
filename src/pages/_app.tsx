import { Theme } from 'styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/reset';
import { ProviderNotification, ProviderUser } from '../context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ProviderUser>
        <ProviderNotification>
          <Component {...pageProps} />
        </ProviderNotification>
      </ProviderUser>
    </ThemeProvider>
  );
}
