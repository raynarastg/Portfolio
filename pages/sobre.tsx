import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { CoursesAccordion } from '@/src/components/CoursesAccordion';
import { LeftColumn } from '@/src/components/LeftColumn';
import { RightColumn } from '@/src/components/RightColumn';
import { H2Title, H3Title } from '@/src/components/Title';
import { styled } from '@/stitches.config';

const StyledAboutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
  width: '100%',
});

const StyledGraduation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

const StyledCourses = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

const StyledSkills = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

export default function About() {
  return (
    <>
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn css={{ flexDirection: 'column', gap: 24 }}>
          <H2Title css={{ textTransform: 'uppercase' }}>Sobre mim</H2Title>
          <StyledAboutContainer>
            <StyledGraduation>
              <H3Title style="sans-serif" weight="bold">
                👩🏻‍🎓 Formação acadêmica
              </H3Title>
            </StyledGraduation>
            <StyledCourses>
              <H3Title style="sans-serif" weight="bold">
                {' '}
                📚 Cursos e certificações
              </H3Title>
              <CoursesAccordion />
            </StyledCourses>
            <StyledSkills>
              <H3Title style="sans-serif" weight="bold">
                🌟 Skills
              </H3Title>
            </StyledSkills>
          </StyledAboutContainer>
        </RightColumn>
      </ColumnsWrapper>
    </>
  );
}
