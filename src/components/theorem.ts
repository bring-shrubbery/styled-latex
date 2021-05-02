import styled from 'styled-components';

export const Theorem = styled.div`
  counter-increment: theorem;
  display: block;
  margin: 12px 0;
  font-style: italic;

  &::before {
    content: 'Theorem ' counter(theorem) '. ';
    font-weight: bold;
    font-style: normal;
  }
`;
