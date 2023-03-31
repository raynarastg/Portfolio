import { styled } from '@stitches/react';
import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { StyledButtonHeader } from '../Buttons';
import { Icon } from '../Icon';

export const ContainerButtonsHeader = styled('header', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  width: 328,
});

type HeaderProps = ComponentProps<typeof ContainerButtonsHeader> & {};

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <ContainerButtonsHeader {...props}>
      <Link href="/">
        <StyledButtonHeader>
          <Icon>home</Icon>
          <p>HOME</p>
        </StyledButtonHeader>
      </Link>
      <Link href="/projetos">
        <StyledButtonHeader>
          <Icon>code_off</Icon>
          <p>PROJETOS</p>
        </StyledButtonHeader>
      </Link>
      <Link href="/sobre">
        <StyledButtonHeader>
          <Icon>auto_awesome</Icon>
          <p>SOBRE</p>
        </StyledButtonHeader>
      </Link>
    </ContainerButtonsHeader>
  );
};
