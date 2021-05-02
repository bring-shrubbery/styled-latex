import styled from 'styled-components';

export const Article = styled.article`
  & > * + * {
    margin-top: 1em;
  }
`;
