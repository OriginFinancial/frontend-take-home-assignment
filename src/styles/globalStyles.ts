import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700|Work+Sans:400,600,500,700&display=swap');
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
  *,
  *:after,
  *:before { box-sizing: border-box; }
  html {
    height: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    height: 100%;
    color: ${theme.neutrals.darkGrey};
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-input-placeholder {
     color: ${theme.neutrals.superlightGrey};
  }
  :-moz-placeholder { /* Firefox 18- */
     color: ${theme.neutrals.superlightGrey};
  }
  ::-moz-placeholder {  /* Firefox 19+ */
     color: ${theme.neutrals.superlightGrey};
  }
  :-ms-input-placeholder {
     color: ${theme.neutrals.superlightGrey};
  }
  div[role="group"][tabindex] {
    display: block;
    min-height: 100vh;
    position: relative;
  }
  div.integrator {
    border: 0px;
  }
`;

export default GlobalStyles;
