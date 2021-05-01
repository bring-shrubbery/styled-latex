import styled from 'styled-components';

export const Link = styled.a`
  &::not([class]) {
    text-decoration-skip: auto;
  }

  &,
  &:visited {
    color: #a00;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid hsl(220, 90%, 52%);
  }
`;
