import { styled } from '@/stitches.config';

export const ContainerPage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 96,
  '@bp1': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
  },
});
