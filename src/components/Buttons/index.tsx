import { styled } from '@/stitches.config';

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
