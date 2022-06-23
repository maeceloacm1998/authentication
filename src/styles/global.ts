import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #121214;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;