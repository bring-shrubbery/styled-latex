import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 3.25rem;
  margin-bottom: 1.625rem;

  &:first-child {
    text-align: center;
  }
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
