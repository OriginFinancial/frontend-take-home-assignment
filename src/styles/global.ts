import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      /*
          I just put this comment here to show where that idea of text scale comes from
          https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd
          https://type-scale.com/
      */
      --text-base-size: 1em;
      --text-scale-ratio: 1.2;

      --text-xs: calc(var(--text-base-size) / Math.pow(var(--text-scale-ratio), 2)); /*11*/
      --text-sm: calc(var(--text-base-size) / var(--text-scale-ratio)); /*13*/
      --text-base: var(--text-base-size);
      --text-md: calc(var(--text-base-size) * var(--text-scale-ratio)); /*19*/
      --text-lg: calc(var(--text-base-size) * var(--text-scale-ratio) * var(--text-scale-ratio)); /*23*/
      --text-xl: calc(var(--text-base-size) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio)); /*27*/
      --text-xxl: calc(var(--text-base-size) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio)); /*33*/
      --text-xxxl: calc(var(--text-base-size) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio)); /*40*/

      @media (max-width: 30em) {
        --text-scale-ratio: 1.1;
        --text-base: 0.875rem;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #F4F8FA;
      font-size: var(--text-base-size);
      font-family: 'Work Sans', sans-serif;

      @media (min-width: 30em) {
          padding-bottom: 5rem;
      }
    }
`;

export default GlobalStyle;
