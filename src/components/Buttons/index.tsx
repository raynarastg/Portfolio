import { styled } from '@/stitches.config';
import Link from 'next/link';
import { ComponentProps } from 'react';
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
const StyledContainerButtons = styled('div', {
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

export const StyledButtonHeader = styled('button', {
  all: 'unset',
  borderLeft: '2px solid $azul',
  backgroundColor: '$offwhite',
  color: '$petroleo',
  display: 'flex',
  gap: 8,
  px: 8,
  fontFamily: 'Sen, sans-serif',
  fontSize: 16,
  fontWeight: 700,
  Icon: {
    fontVariant: "'FILL' 0'wght' 400'GRAD' 0'opsz' 48",
  },
  '&:active': {
    backgroundColor: '$coral',
    color: '$offwhite',
    borderLeft: '$coral',
  },
  '&:hover': {
    backgroundColor: '$coral',
    color: '$offwhite',
    borderLeft: '2px solid $coral',
  },
});
