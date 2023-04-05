import { styled } from '@/stitches.config';

const StyledIcon = styled('div', {
  display: 'inline-flex',
  height: 38,
  width: 38,
  variants: {
    network: {
      github: {
        background: 'url("images/github-icon.png") center / contain no-repeat',
        height: 36,
      },
      instagram: {
        background: 'url("images/instagram-icon.png") center / contain no-repeat',
      },
      linkedin: {
        background: 'url("images/linkedin-icon.png") center / contain no-repeat',
      },
    },
  },
  '@bp1': {
    width: 30,
    height: 30,
  },
});

export const SocialIcon = StyledIcon;
