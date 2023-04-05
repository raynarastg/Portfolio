import { styled } from '@/stitches.config';

export type Tag = {
  color?: 'azul' | 'roxo' | 'coral' | 'verde' | 'amarelo' | 'rosa' | 'cinza' | 'pretinho';
  label: string;
};

const StyledTag = styled('span', {
  backgroundColor: '$petroleo',
  borderRadius: 9999,
  color: '$branco',
  fontSize: 12,
  lineHeight: '15px',
  variants: {
    color: {
      amarelo: {
        backgroundColor: '$amarelo',
      },
      azul: {
        backgroundColor: '$azul',
      },
      coral: {
        backgroundColor: '$coral',
      },
      roxo: {
        backgroundColor: '$roxo',
      },
      verde: {
        backgroundColor: '$verde',
      },
      rosa: {
        backgroundColor: '$rosa',
      },
      pretinho: {
        backgroundColor: '$pretinho',
      },
      cinza: {
        backgroundColor: '$cinza',
      },
    },
    type: {
      soft: {
        backgroundColor: '$lilas',
        color: '$offwhite',
        fontSize: 14,
        textTransform: 'uppercase',
        '@bp1': {
          fontSize: 10,
        },
      },
    },
  },
  px: 12,
  py: 4,
});

export const Tag = StyledTag;
