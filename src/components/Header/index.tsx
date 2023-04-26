import { styled } from '@/stitches.config';
import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { HeaderButton } from '../Buttons';
import { Icon } from '../Icon';
export const ContainerButtonsHeader = styled('header', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  '@mobile': {
    position: 'fixed',
    top: 10,
    zIndex: 999,
    backgroundColor: '$offwhite',
  },
  '@desktop': {
    position: 'fixed',
  },
});

type HeaderProps = ComponentProps<typeof ContainerButtonsHeader> & {
  pageActive?: 'home' | 'projetos' | 'sobre';
};

export const Header: React.FC<HeaderProps> = ({ pageActive, ...props }) => {
  return (
    <ContainerButtonsHeader {...props}>
      <Link href='/'>
        <HeaderButton active={pageActive == 'home' ? true : false}>
          <Icon>home</Icon>
          <p>HOME</p>
        </HeaderButton>
      </Link>
      <Link href='/projetos'>
        <HeaderButton active={pageActive == 'projetos' ? true : false}>
          <Icon>code</Icon>
          <p>PROJETOS</p>
        </HeaderButton>
      </Link>
      <Link href='/sobre'>
        <HeaderButton active={pageActive == 'sobre' ? true : false}>
          <Icon>auto_awesome</Icon>
          <p>SOBRE</p>
        </HeaderButton>
      </Link>
    </ContainerButtonsHeader>
  );
};
