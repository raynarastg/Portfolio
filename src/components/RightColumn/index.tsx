import { styled } from '@/stitches.config';

const StyledSection = styled('section', {
  display: 'inline-flex',
  flex: 1,
  '@mobile': {
    paddingBottom: 40,
    marginLeft: 'unset',
  },
  '@desktop': {
    marginLeft: 408,
  },
});

export const RightColumn = StyledSection;
