import { db } from '@/database';
import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { ContainerPage } from '@/src/components/ContainerPage';
import { Header } from '@/src/components/Header';
import { LeftColumn } from '@/src/components/LeftColumn';
import { ProjectCard } from '@/src/components/ProjectCard';
import { RightColumn } from '@/src/components/RightColumn';
import { H2Title } from '@/src/components/Title';
import { styled } from '@/stitches.config';
const StyledProjectsContainer = styled('div', {
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 24,
  justifyContent: 'flex-start',
  width: '100%',
});

export default function Projects() {
  return (
    <ContainerPage>
      <Header pageActive="projetos" />
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn css={{ flexDirection: 'column', gap: 24, '@mobile': {alignItems: 'center'}}}>
          <H2Title css={{ textTransform: 'uppercase' }}>Projetos</H2Title>
          <StyledProjectsContainer css={{'@mobile': {justifyContent: 'center'}}}>
            {db.map((project, key) => (
              <ProjectCard
                key={key}
                projectPath={`/projeto/${project.projectSlug}`}
                projectImageUrl={project.projectPhoto?.url}
                projectTitle={project.projectName}
                projectShortDescription={project.projectShortDescription}
                projectTags={project.projectTags}
              ></ProjectCard>
            ))}
          </StyledProjectsContainer>
        </RightColumn>
      </ColumnsWrapper>
    </ContainerPage>
  );
}
