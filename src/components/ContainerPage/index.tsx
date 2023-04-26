import { styled } from '@/stitches.config';

export const ContainerPage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 96,
  '@mobile': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 50,
  },
  header: {
    '@desktop': {
      position: 'fixed',
    },
  },
});
