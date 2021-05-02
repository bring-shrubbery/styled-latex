import styled from 'styled-components';

const LatexUpper = styled.span`
  text-transform: uppercase;
  font-size: 0.75em;
  vertical-align: 0.28em;
  margin-left: -0.48em;
  margin-right: -0.15em;
  line-height: 1ex;
`;

const LatexLower = styled.span`
  text-transform: uppercase;
  vertical-align: -0.5ex;
  margin-left: -0.1667em;
  margin-right: -0.125em;
  line-height: 1ex;
`;

export const Latex = () => {
  return (
    <span>
      L<LatexUpper>a</LatexUpper>T<LatexLower>e</LatexLower>X
    </span>
  );
};
