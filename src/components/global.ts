import {createGlobalStyle} from 'styled-components';

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
  }
`;
