import styled from 'styled-components';

export const LatexContainer = styled.div`
  max-width: 80ch;
  min-height: 100vh;
  /* overflow-x: hidden; */
  margin: 0 auto;
  padding: 2rem 1.25rem;

  counter-reset: theorem;
  counter-reset: definition;
  counter-reset: sidenote-counter;

  color: hsl(0, 5%, 10%);

  text-rendering: optimizeLegibility;
`;
