import styled, { createGlobalStyle } from "styled-components";

export const LatexFonts = createGlobalStyle`
  @font-face {
  font-family: 'Latin Modern';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url('./fonts/LM-regular.woff2') format('woff2'),
    url('./fonts/LM-regular.woff') format('woff'),
    url('./fonts/LM-regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Latin Modern';
    font-style: italic;
    font-weight: normal;
    font-display: swap;
    src: url('./fonts/LM-italic.woff2') format('woff2'),
      url('./fonts/LM-italic.woff') format('woff'),
      url('./fonts/LM-italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Latin Modern';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url('./fonts/LM-bold.woff2') format('woff2'),
      url('./fonts/LM-bold.woff') format('woff'),
      url('./fonts/LM-bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Latin Modern';
    font-style: italic;
    font-weight: bold;
    font-display: swap;
    src: url('./fonts/LM-bold-italic.woff2') format('woff2'),
      url('./fonts/LM-bold-italic.woff') format('woff'),
      url('./fonts/LM-bold-italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Libertinus';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url('./fonts/Libertinus-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Libertinus';
    font-style: italic;
    font-weight: normal;
    font-display: swap;
    src: url('./fonts/Libertinus-italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Libertinus';
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url('./fonts/Libertinus-bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Libertinus';
    font-style: italic;
    font-weight: bold;
    font-display: swap;
    src: url('./fonts/Libertinus-bold-italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Libertinus';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('./fonts/Libertinus-semibold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Libertinus';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('./fonts/Libertinus-semibold-italic.woff2') format('woff2');
  }
`;

export const GlobalLatexStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  dl,
  dd {
    margin: 0;
  }

  /* Make default font-size 1rem and add smooth scrolling to anchors */
  html {
    font-size: 1rem;
    scroll-behavior: smooth;
  }

  body.libertinus {
    font-family: "Libertinus", Georgia, Cambria, "Times New Roman", Times, serif;
  }

  body {
    font-family: "Latin Modern", Georgia, Cambria, "Times New Roman", Times,
      serif;
    line-height: 1.8;

    max-width: 80ch;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 2rem 1.25rem;

    counter-reset: theorem;
    counter-reset: definition;
    counter-reset: sidenote-counter;

    color: hsl(0, 5%, 10%);
    background-color: hsl(210, 20%, 98%);

    text-rendering: optimizeLegibility;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  margin-top: 1rem;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 3.25rem;
  margin-bottom: 1.625rem;
`;

export const H2 = styled.h2`
  font-size: 1.7rem;
  line-height: 2rem;
  margin-top: 3rem;
  margin-bottom: 0.8rem;

  ${H1} + & {
    margin-top: 1.625rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.4rem;
  margin-top: 2.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.625rem;

  ${H2} + & {
    margin-top: 0.8rem;
  }
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  line-height: 1.625rem;

  ${H3} + & {
    margin-top: 0.8rem;
  }
`;

export const H5 = styled.h5`
  font-size: 1rem;
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  line-height: 1.625rem;

  ${H4} + & {
    margin-top: 0.8rem;
  }
`;

export const H6 = styled.h6`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  margin-top: 2.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.625rem;

  ${H5} + & {
    margin-top: -0.8rem;
  }
`;
