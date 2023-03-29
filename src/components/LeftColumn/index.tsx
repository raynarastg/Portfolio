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
});

const StyledContactsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
  gap: 8,
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
        color="coral"
        css={{
          textTransform: 'uppercase',
        }}
      >
        Raynara Santiago
      </H1Title>
      <H3Title>Full Stack Developer 👩🏻‍💻</H3Title>
      <StyledSocialIconsContainer>
        <Link href="https://linkedin.com/in/raynarastg" target="_blank">
          <SocialIcon network="linkedin" />
        </Link>
        <Link href="https://instagram.com/raynara.dev" target="_blank">
          <SocialIcon network="instagram" />
        </Link>
        <Link href="https://github.com/raynarastg" target="_blank">
          <SocialIcon network="github" />
        </Link>
      </StyledSocialIconsContainer>
      <StyledContactsContainer>
        <H5Title color="elefante">
          <EmojiIcon margin="right">✉️</EmojiIcon>RAYNARASTGDEV@GMAIL.COM
        </H5Title>
        <H5Title color="elefante">
          <EmojiIcon margin="right">📱</EmojiIcon>(44) 98402-2118
        </H5Title>
      </StyledContactsContainer>
    </StyledSection>
  );
};

// interface IColunaEsquerda {
//   rota?: string
// }

// const StyledSectionName = styled('div', {
//   display: 'inline-flex',
//   flexDirection: 'column',
//   gap: 8,
//   h1: {
//     margin: 0
//   },
//   h4: {
//     margin: 0
//   }
// })

// const StyledH1 = styled('h1', {
//   color: '$coral'
// });

// const StyledH4 = styled('h4', {
//   color: '$petroleo'
// });

// const StyledSectionIcons = styled('div', {
//   display: 'flex',
//   flexDirection: 'row',
//   gap: 24
// });

// export const ColunaEsquerda: FC<IColunaEsquerda> = ({}) => {
//   return (
//     <StyledSection>
//       <StyledSectionName>
//         <StyledH1>RAYNARA <br></br> SANTIAGO</StyledH1>
//           <StyledH4>Full Stack Developer</StyledH4>
//       </StyledSectionName>
//       <StyledSectionIcons>
//         <a target='_blank' href="https://www.linkedin.com/in/raynarastg/">
//           <div>icon linkedin</div>
//         </a>
//         <a target='_blank' href="https://github.com/raynarastg">
//           <div>icon github</div>
//         </a>
//         <a target='_blank' href="https://www.instagram.com/raynara.dev/">
//           <div>icon instagram</div>
//         </a>
//       </StyledSectionIcons>
//       <StyledSectionContact>
//         <p>RAYNARASTGDEV@GMAIL.COM</p>
//         <p>(44) 98402-2118</p>
//       </StyledSectionContact>
//     </StyledSection>)
// }
