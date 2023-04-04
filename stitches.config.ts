import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      petroleo: '#2E4053',
      elefante: '#666666',
      offwhite: '#FBFBFB',
      azul: '#8ABBFA',
      cinza: '#B2BABB',
      cinzinha: '#EFEFEF',
      coral: '#F08080',
      lilas: '#D7BDE2',
      roxo: '#6C3483',
      branco: '#FFFFFF',
      verde: '#7DCEA0',
      amarelo: '#FFC700',
      pretinho: '#404040',
      rosa: '#FFB6C1',
    },
  },
  utils: {
    px: (value: string | number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(max-width: 300px)',
    bp2: '(max-width: 900px)',
    bp3: '(min-width: 1024px)',
  },
});

export const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: 'Arvo, serif',
    color: '$elefante',
    background: '$offwhite',
  },
  body: {
    px: 80,
    py: 40,
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    scrollBehavior: 'smooth',
    // '&::selection': {
    //   background: '$green-100'
    // },
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export type CSS = Stitches.CSS<typeof config>;
