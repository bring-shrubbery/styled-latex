import styled from 'styled-components';

export const TableOfContents = styled.nav`
  & ol {
    counter-reset: item;
    padding-left: 2rem;
  }
  & li {
    display: block;
  }
  & li:before {
    content: counters(item, '.') ' ';
    counter-increment: item;
    padding-right: 0.85rem;
  }
`;
