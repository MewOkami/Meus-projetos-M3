import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root{
  --font-primary: 'Montserrat', sans-serif;
  --font-paragraph: 'Inter', sans-serif;

  --color-primary: #8490FF;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-lightblue: #F9F9FF;
 }

 *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body, html{
    width: 100vw;
    min-height: 100vh;
    font-family: var(--font-primary);
  }

  body{
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, button{
    border: none;
    outline: none;
  }

  p{
    font-family: var(--font-paragraph);
  }

  button {
    cursor:pointer;
  }
`;
