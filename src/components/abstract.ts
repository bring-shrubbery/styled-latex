import styled from 'styled-components';

import {H2} from './headings';
import {Paragraph} from './paragraph';

export const Abstract = styled.div`
  margin: 2.25rem 0;
  &,
  & ${Paragraph} {
    text-align: center;
    margin-top: 0;
  }

  & > ${H2} {
    font-size: 1rem;
    margin-bottom: -0.2rem;
  }
`;
