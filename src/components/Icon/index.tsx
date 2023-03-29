import { styled } from '@/stitches.config';

const StyledIcon = styled('div', {
  color: '$elefante',
  fontFamily: 'Material Symbols Outlined',
  fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 48",
  variants: {
    size: {
      big: {
        fontSize: 36,
      },
      small: {
        fontSize: 16,
      },
    },
    style: {
      outlined: {
        fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 48",
      },
    },
  },
});

export const Icon = StyledIcon;
