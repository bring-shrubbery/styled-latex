import styled from 'styled-components';

export const Proof = styled.div`
  display: block;
  margin: 12px 0;
  font-style: normal;
  position: relative;

  &::before {
    content: 'Proof. ' attr(title);
    font-style: italic;
  }

  &:after {
    content: '◾️';
    position: absolute;
    right: -12px;
    bottom: -2px;
  }
`;
