import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
    font-size: 84.5%
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
