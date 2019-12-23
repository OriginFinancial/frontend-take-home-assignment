import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  font-family: inherit;
  color: inherit;
}
body, html {
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700|Work+Sans:400,600,500,700&display=swap');
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Work Sans', sans-serif;
  background-color: #f4f8fa;

  li {
  list-style: none;
  }

  a {
    text-decoration: none;
  }
}
`;

/* Theme Colors */

// blue = #1b31a8
// lightBlue = #0079ff
// red = #fe5722
// green = #4fda68
// yellow = #ffcc00
// black = #000000
// almostBlack = #1d1e1f
// darkGrey = #657786
// grey = #aab8c2
// lightGrey = #e1e8ed
// superLightGrey = #f4f8fa
// greyBlue = #eff7ff
// white = #ffffff

export default GlobalStyle;
