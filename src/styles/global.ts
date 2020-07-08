import { createGlobalStyle } from 'styled-components';
import { colors } from '.';

const GlobalStyle = createGlobalStyle`
  *, 
  *:before, 
  *:after {
      box-sizing: border-box;
  }
  html {
    font-size: 62.5%;  /* 1rem = 10px */
  }

  body {
    background-color: ${props => props.theme.colors.primary.extralight};
    color: ${props => props.theme.colors.text.main};
    font-family: Inter;
    font-size: 1.4rem;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.white};
  }

  input {
    &:-internal-autofill-selected,
    &:-webkit-autofill {
      background-color: ${props => props.theme.colors.primary.main} !important;
    }
  }
`;

export default GlobalStyle;
