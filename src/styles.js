import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');
* {
  padding: 0;
  margin: 0;
  outline: 0;
  font-family: inherit;
  color: inherit;
  box-sizing: border-box;
}
body, html {
  min-height: 100vh;
  max-width: 100%;
  overflow: auto;
  font-family: 'Work Sans', sans-serif;
  background-color: #f4f8fa;
}

#main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
`;

export default GlobalStyle;
