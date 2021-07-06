import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* VARIABLE CSS */
  /* :root {
    --header-height: 4rem;
    --header-height-1: 5rem;
    --header-height-2: 6rem;
    --font-semi: 600;
  } */

  /* VARIEBLE COLORS */
  /* :root {
    --first-background-color: #050410;
    --first-color: #3f70f3;
    --second-color: #fff;
    --footer-first-color: #fff;
    --footer-second-color: #3f70f3;
  } */

  /* VARIEBLE FONTS AND TYPES */
  /* :root {
    --page-width: 80%;
    --page-max-width: 1680px;

    --extraLarge-font-size: 2.8rem;
    --large-font-size: 2.2rem;
    --medium-font-size: 1.8rem;
    --h2-font-size: 1.8rem;
    --normal-font-size: 1rem;

    @media screen and (min-width: 380px) {
      --large-font-size: 2.6rem;
    }

    @media screen and (min-width: 545px) {
      --extraLarge-font-size: 4rem;
      --large-font-size: 2.8rem;
      --medium-font-size: 2.8rem;
      --h2-font-size: 2.4rem;
      --normal-font-size: 1.1rem;
    }

    @media screen and (min-width: 840px) {
      --large-font-size: 3.3rem;
    }

    @media screen and (max-width: 768px) {
      --page-width: 90%;
    }
  }

  :root {
    --m-1: 1rem;
    --m-2: 2rem;
    --m-3: 3rem;
    --m-4: 4rem;
    --m-5: 5rem;
    --m-6: 6rem;
  }

  :root {
    --z-back: -10;
    --z-normal: 1;
    --z-tooltip: 10;
    --z-fixed: 100;
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100vh;

    /* background-color: var(--first-background-color); */
    cursor: initial;
    scroll-behavior: smooth;
  }

  body, textarea {
    font-size: var(--normal-font-size);
    font-family: Arial, Helvetica, sans-serif;
    /* color: var(--second-color); */
  }

  a {
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }
`