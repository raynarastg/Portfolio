import { styled } from '@/stitches.config';

const StyledSection = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 80,
  width: '100%',
  '@mobile': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
});

export const ColumnsWrapper = StyledSection;
