import { createGlobalStyle } from 'styled-components'

const breakpoints = {
  laptop: '1360px',
}

export const device = {
  laptop: `(min-width: ${breakpoints.laptop})`,
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Work Sans', sans-serif;
    font-weight: normal;
  }

  body {
    background-color: #F4F8FA;
    -webkit-font-smoothing: antialiased;
    font-size: 100%;
  }
`

export default GlobalStyle