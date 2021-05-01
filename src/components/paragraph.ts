import styled from 'styled-components';
import {
  typography,
  space,
  color,
  TypographyProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

interface ParagraphProps extends TypographyProps, SpaceProps, ColorProps {
  author?: boolean;
}

const authorStyles = `
  margin: 0.85rem 0;
  font-variant-caps: small-caps;
  text-align: center;
`;

export const Paragraph = styled.p<ParagraphProps>`
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  margin-top: 1rem;
  ${typography}
  ${space}
  ${color}
  ${({author}) => (author ? authorStyles : '')}
`;
