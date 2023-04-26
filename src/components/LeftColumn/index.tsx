import { styled } from '@/stitches.config';
import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { EmojiIcon } from '../EmojiIcon';
import { SocialIcon } from '../SocialIcon';
import { H1Title, H3Title, H5Title } from '../Title';

const StyledSection = styled('section', {
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 24,
  width: 328,
  '@mobile': {
    gap: 16,
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  '@desktop': {
    position: 'fixed',
  },
});

const StyledContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
  gap: 8,
  '@mobile': {
    flexDirection: 'column-reverse',
  },
});

const StyledSocialIconsContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  gap: 24,
  justifyContent: 'start',
});

type LeftColumnProps = ComponentProps<typeof StyledSection> & {};

export const LeftColumn: React.FC<LeftColumnProps> = ({ ...props }) => {
  return (
    <StyledSection {...props}>
      <H1Title
        color='coral'
        css={{
          textTransform: 'uppercase',
        }}
      >
        Raynara Santiago
      </H1Title>
      <H3Title>Full Stack Developer 👩🏻‍💻</H3Title>
      <StyledSocialIconsContainer>
        <Link href='https://linkedin.com/in/raynarastg' target='_blank'>
          <SocialIcon network='linkedin' />
        </Link>
        <Link href='https://instagram.com/raynara.dev' target='_blank'>
          <SocialIcon network='instagram' />
        </Link>
        <Link href='https://github.com/raynarastg' target='_blank'>
          <SocialIcon network='github' />
        </Link>
      </StyledSocialIconsContainer>
      <StyledContactsContainer>
        <H5Title color='elefante'>
          <EmojiIcon margin='right'>✉️</EmojiIcon>RAYNARASTGDEV@GMAIL.COM
        </H5Title>
        <H5Title color='elefante'>
          <EmojiIcon margin='right'>📱</EmojiIcon>(44) 98402-2118
        </H5Title>
      </StyledContactsContainer>
    </StyledSection>
  );
};
