import React, {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';

const StyledPre = styled.pre`
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  font-size: 85%;

  padding: 1rem 1.4rem;
  max-width: 100%;
  overflow: auto;
  border-radius: 4px;
  background: #f4f4f6;
`;

const StyledCode = styled.code`
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  font-size: 85%;

  ${StyledPre} & {
    font-size: 95%;
    position: relative;
  }
`;

interface CodeProps extends HTMLAttributes<HTMLElement> {
  multiline?: boolean;
}

export const Code: FC<CodeProps> = ({children, multiline, ...rest}) => {
  if (multiline) {
    return (
      <StyledPre {...rest}>
        <StyledCode>{children}</StyledCode>
      </StyledPre>
    );
  } else {
    return <StyledCode {...rest}>{children}</StyledCode>;
  }
};
