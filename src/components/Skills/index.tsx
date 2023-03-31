import { styled } from '@/stitches.config';

const StyledSection = styled('div', {
  alignItems: 'center',
  color: '$elefante',
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
});

const StyledSectionSoft = styled('div', {
  alignItems: 'center',
  color: '$offwhite',
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
});

export const StyledHardSkills = StyledSection;

export const StyledSoftSkills = StyledSectionSoft;
