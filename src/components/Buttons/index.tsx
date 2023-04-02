import { styled } from '@/stitches.config';
import { ComponentProps } from '@stitches/react';
import Link from 'next/link';
import React from 'react';
import { Icon } from '../Icon';

export const StyledButton = styled('button', {
  all: 'unset',
  border: '2px solid $petroleo',
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Sen, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  gap: 8,
  px: 16,
  py: 8,
  Icon: { fontVariant: "'FILL' 0 'wght' 400 'GRAD' 0 'opsz' 48" },
  '&:focus-visible': {
    outline: '2px solid $petroleo',
  },
});
export const StyledContainerButtons = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

type ButtonsProps = ComponentProps<typeof StyledContainerButtons> & {};

export const Buttons: React.FC<ButtonsProps> = ({ ...props }) => {
  return (
    <StyledContainerButtons {...props}>
      <Link href="https://project-tryunfo-gamma.vercel.app/" target="_blank">
        <StyledButton>
          <Icon css={{ color: '$coral' }}>open_in_new</Icon>
          <p>aplicação online</p>
        </StyledButton>
      </Link>
      <Link href="https://github.com/raynarastg/Project-Tryunfo" target="_blank">
        <StyledButton>
          <Icon css={{ color: '$coral' }}>code</Icon>
          <p>repositório no github</p>
        </StyledButton>
      </Link>
    </StyledContainerButtons>
  );
};

const StyledButtonColor = styled('div', {
  position: 'absolute',
  left: 0,
  backgroundColor: '$azul',
  color: '$offwhite',
  overflow: 'hidden',
  height: '100%',
  width: '2px',
  transition: 'all 0.3s ease',
  '.buttonContent': {
    position: 'absolute',
    left: 0,
    paddingLeft: 10,
    paddingRight: 8,
    display: 'flex',
    gap: 8,
    fontFamily: 'Sen, sans-serif',
    fontSize: 16,
    fontWeight: 700,
  },
  [`& ${Icon}`]: {
    color: '$offwhite',
  },
});

const StyledButtonHeader = styled('button', {
  all: 'unset',
  backgroundColor: '$offwhite',
  color: '$petroleo',
  display: 'flex',
  gap: 8,
  px: 8,
  paddingLeft: 10,
  fontFamily: 'Sen, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  position: 'relative',
  [`&:hover ${StyledButtonColor}`]: {
    width: '100%',
    // backgroundColor: '$coral',
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$coral',
        color: '$offwhite',
        [`& ${StyledButtonColor}`]: {
          display: 'none',
        },
        [`& ${Icon}`]: {
          color: '$offwhite',
        },
      },
    },
  },
});

type HeaderButton = ComponentProps<typeof StyledButtonHeader>;

export const HeaderButton: React.FC<HeaderButton> = ({ children, ...props }) => {
  return (
    <StyledButtonHeader {...props}>
      <StyledButtonColor>
        <div className="buttonContent">{children}</div>
      </StyledButtonColor>
      {children}
    </StyledButtonHeader>
  );
};
