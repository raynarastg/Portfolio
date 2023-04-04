import { styled } from '@/stitches.config';

const StyledSection = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  gap: 80,
  width: '100%',
  '@bp1': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  '@bp2': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const ColumnsWrapper = StyledSection;
