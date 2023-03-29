import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { LeftColumn } from '@/src/components/LeftColumn';
import { RightColumn } from '@/src/components/RightColumn';
import { Tag } from '@/src/components/Tag';
import { H2Title, H3Title } from '@/src/components/Title';
import { styled } from '@/stitches.config';
import Image from 'next/image';

type Tag = {
  label: string;
  color: 'azul' | 'roxo' | 'coral' | 'verde' | 'amarelo';
};

const StyledProjectLeftColumn = styled('div', {
  backgroundColor: '$petroleo',
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

export default function Project() {
  const projectTags = [] as Tag[];

  return (
    <>
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn
          css={{ flexDirection: ' row', gap: 24, alignItems: 'flex-start' }}
        >
          <StyledProjectLeftColumn>
            <StyledImageContainer>
              <Image
                src="https://picsum.photos/1920/1080"
                alt="Miniatura do Projeto"
                fill
                style={{ objectFit: 'cover' }}
              />
            </StyledImageContainer>
          </StyledProjectLeftColumn>
          <StyledProjectRightColumn>
            <StyledDetails>
              <H2Title>🃏 Tryunfo</H2Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                non consequat velit. Nunc aliquam mi quis risus venenatis
                tincidunt. Phasellus congue ante at mi facilisis, nec sodales
                erat condimentum. Quisque convallis orci eget lacus auctor,
                vestibulum auctor ante rhoncus.
              </p>
              <p>
                Curabitur lacus magna, commodo in fringilla viverra, molestie
                quis nibh. Ut pellentesque, elit mollis pharetra euismod, orci
                nunc efficitur nunc, ut commodo nulla urna in dui. Proin
                vestibulum turpis interdum dictum rhoncus. Quisque in mollis
                lectus.
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
    </>
  );
}
