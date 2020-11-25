import { createGlobalStyle } from "styled-components";

export default createGlobalStyle<ITheme>`  
  :root {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  :focus {
    outline: 0;
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    position: relative;
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  input,
  button,
  select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  button {
    border: none;
    background: none;
  }
  
  input {
    background-color: #fff;
  }

  #root {
    height: 100%;
  }
`;
