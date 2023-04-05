import { styled } from '@/stitches.config';

const StyledSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  color: '$elefante',
  fontFamily: 'Sen, sans-serif',
  fontSize: 16,
  lineHeight: '120%',
  p: {
    flexWrap: 'nowrap',
    fontWeight: 700,
  },
  span: {
    fontWeight: 500,
  },
  '@bp1': {
    p: {
      minWidth: 70,
      flex: 'content',
    },
  },
});

const StyledContainer = styled('div', {
  alignContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  '@bp1': {
    p: {
      fontSize: 12,
    },
  },
});

export const StyledContainerInfosGraduations = StyledSection;

export const StyledContainerGraduations = StyledContainer;
