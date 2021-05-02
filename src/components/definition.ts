import styled from 'styled-components';

export const Definition = styled.div`
  counter-increment: definition;
  display: block;
  margin: 12px 0;
  font-style: normal;

  &::before {
    content: 'Definition ' counter(definition) '. ';
    font-weight: bold;
    font-style: normal;
  }
`;
