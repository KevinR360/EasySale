import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html {
  font-size: 62.5%;
}

html, body, #root {
  min-height: 100%;
}

body {
  -webkit-font-smoothing: antialiased !important;
  background: #f9f9f9;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  border: 0;
  background: none;
}

@media (min-width: 720px) {
  html {
    font-size: 70%;
  }
}
`;
