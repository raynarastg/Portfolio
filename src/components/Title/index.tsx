import { styled } from '@/stitches.config';
import { ComponentProps } from '@stitches/react';

const StyledH1 = styled('h1', {
  color: '$petroleo',
  fontFamily: 'Sen, sans-serif',
  fontSize: 50,
  fontWeight: 700,
  lineHeight: 1.2,
  variants: {
    color: {
      coral: {
        color: '$coral',
      },
    },
  },
  '@bp1': {
    fontSize: 40,
  },
});

const StyledH2 = styled('h2', {
  color: '$petroleo',
  fontFamily: 'Sen, sans-serif',
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 1.2,
  variants: {
    color: {
      coral: {
        color: '$coral',
      },
    },
  },
  '@bp1': {
    fontSize: 22,
  },
});

const StyledH3 = styled('h3', {
  color: '$petroleo',
  fontFamily: 'Arvo, serif',
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 1.2,
  variants: {
    color: {
      coral: {
        color: '$coral',
      },
    },
    style: {
      'sans-serif': {
        fontFamily: 'Sen, sans-serif',
      },
    },
    weight: {
      bold: {
        fontWeight: 700,
      },
    },
  },
  '@bp1': {
    fontSize: 16,
  },
});

const StyledH4 = styled('h4', {
  color: '$petroleo',
  fontFamily: 'Arvo, serif',
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 1.2,
  variants: {
    color: {
      coral: {
        color: '$coral',
      },
    },
    style: {
      'sans-serif': {
        fontFamily: 'Sen, sans-serif',
      },
    },
    weight: {
      bold: {
        fontWeight: 700,
      },
    },
  },
  '@bp1': {
    fontSize: 14,
  },
});

const StyledH5 = styled('h5', {
  color: '$petroleo',
  fontFamily: 'Arvo, serif',
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '20px',
  variants: {
    color: {
      coral: {
        color: '$coral',
      },
      elefante: {
        color: '$elefante',
      },
    },
    style: {
      'sans-serif': {
        fontFamily: 'Sen, sans-serif',
      },
    },
  },
  '@bp1': {
    fontSize: 12,
  },
});

type H1TitleProps = ComponentProps<typeof StyledH1> & {};

export const H1Title: React.FC<H1TitleProps> = ({ ...props }) => {
  return <StyledH1 {...props} />;
};
export const H2Title = StyledH2;
export const H3Title = StyledH3;
export const H4Title = StyledH4;
export const H5Title = StyledH5;
