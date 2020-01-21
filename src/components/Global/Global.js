import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body,
  button {
    font-family: 'Rubik', 'Work Sans';
    font-weight: 400;
  }

  button:focus {
    outline: none;
  }

  body {
    margin: 0;
  }

  h1,
  section {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  ul ul {
    list-style-type: none;
  }

  fieldset {
    border: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
  }
`;

export { Global };
