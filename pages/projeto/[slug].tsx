import { Buttons } from '@/src/components/Buttons';
import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { ContainerPage } from '@/src/components/ContainerPage';
import { Header } from '@/src/components/Header';
import { Icon } from '@/src/components/Icon';
import { LeftColumn } from '@/src/components/LeftColumn';
import { RightColumn } from '@/src/components/RightColumn';
import { Tag } from '@/src/components/Tag';
import { H2Title, H3Title } from '@/src/components/Title';
import { styled } from '@/stitches.config';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledProjectLeftColumn = styled('div', {
  backgroundColor: '$offwhite',
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 16,
  width: 320,
});

const StyledImageContainer = styled('div', {
  paddingBottom: '56.25%',
  position: 'relative',
  width: '100%',
});

const StyledProjectRightColumn = styled('div', {
  display: 'inline-flex',
  flex: 1,
  flexDirection: 'column',
  gap: 32,
  px: 16,
  py: 0,
});
const StyledDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});
const StyledStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const StyledTagsContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'flex-start',
});

// const StyledContainerButtons = styled('div', {
//   alignItems: 'flex-start',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 8,
// });

const StyledLink = styled(Link, {
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'Sen, sans-serif',
  fontWeight: 700,
  color: '$petroleo',
  paddingBottom: 4,
  p: {
    textDecoration: 'underline',
  },
});

export default function Project() {
  const projectTags = [
    { label: 'React', color: 'azul' },
    { label: 'JavaScript', color: 'amarelo' },
    { label: 'CSS', color: 'coral' },
  ] as Tag[];
  const { query } = useRouter();
  const projectSlug = query.slug;

  return (
    <ContainerPage>
      <Header />
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn css={{ flexDirection: ' row', gap: 24, alignItems: 'flex-start' }}>
          <StyledProjectLeftColumn>
            <StyledLink href="/projetos">
              <Icon css={{ color: '$coral' }}>arrow_back_ios</Icon> <p>ver todos os projetos</p>
            </StyledLink>
            <StyledImageContainer>
              <Image
                src="https://picsum.photos/1920/1080"
                alt="Miniatura do Projeto"
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledImageContainer>
            <Buttons></Buttons>
          </StyledProjectLeftColumn>
          <StyledProjectRightColumn>
            <StyledDetails>
              <H2Title>{projectSlug}</H2Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non consequat velit. Nunc aliquam mi
                quis risus venenatis tincidunt. Phasellus congue ante at mi facilisis, nec sodales erat condimentum.
                Quisque convallis orci eget lacus auctor, vestibulum auctor ante rhoncus.
              </p>
              <p>
                Curabitur lacus magna, commodo in fringilla viverra, molestie quis nibh. Ut pellentesque, elit mollis
                pharetra euismod, orci nunc efficitur nunc, ut commodo nulla urna in dui. Proin vestibulum turpis
                interdum dictum rhoncus. Quisque in mollis lectus.
              </p>
            </StyledDetails>
            <StyledStack>
              <H3Title style="sans-serif" weight="bold">
                Tecnologias utilizadas
              </H3Title>
              <StyledTagsContainer>
                {projectTags.map(
                  (tag, tagKey) =>
                    tag.label && (
                      <Tag key={tagKey} color={tag.color}>
                        {tag.label}
                      </Tag>
                    )
                )}
              </StyledTagsContainer>
            </StyledStack>
          </StyledProjectRightColumn>
        </RightColumn>
      </ColumnsWrapper>
    </ContainerPage>
  );
}
