import React, {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';

const SidenoteReferenceLabel = styled.label`
  counter-increment: sidenote-counter;

  display: inline;
  cursor: pointer;

  &::after {
    position: relative;
    vertical-align: baseline;
    content: counter(sidenote-counter);
    font-size: 0.7rem;
    top: -0.5rem;
    left: 0.1rem;
  }
`;

interface SidenoteProps {
  position: 'left' | 'right';
}

export const Sidenote = styled.span<SidenoteProps>`
  font-size: 0.8rem;
  clear: right;
  width: 18vw;

  ${({position}) => {
    if (position === 'left') {
      return `float: left;
      margin-left: -20vw;
      margin-bottom: 1em;`;
    } else {
      return `float: right;
      margin-right: -20vw;
      margin-bottom: 1em;`;
    }
  }}

  &:target {
    border: hsl(55, 55%, 70%) 1.5px solid;
    padding: 0 0.5rem;
    scroll-margin-block-start: 10rem;
  }

  &::before {
    position: relative;
    vertical-align: baseline;
  }

  @media (max-width: 1050px) {
    display: none;
  }

  ${SidenoteReferenceLabel} ~ &::before {
    content: counter(sidenote-counter) ' ';
    font-size: 0.7rem;
    top: -0.5rem;
  }
`;

const SidenoteToggleInput = styled.input`
  display: none;
`;

type SidenoteReferenceProps = HTMLAttributes<HTMLElement>;

export const SidenoteReference: FC<SidenoteReferenceProps> = ({id}) => {
  return (
    <>
      <SidenoteReferenceLabel htmlFor={id} />
      <SidenoteToggleInput type="checkbox" id={id} />
    </>
  );
};
