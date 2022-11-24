import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html, body {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color:${({ theme }) => theme.corlors.neutral.veryLightGray};
    max-width: 1440px;
    margin: 0 auto;

  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }

  #__next main {
    display: flex;
    flex-direction: column;
    height: 100%;

  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
