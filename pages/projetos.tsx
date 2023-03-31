import { db } from '@/database';
import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
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
    <>
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn css={{ flexDirection: 'column', gap: 24 }}>
          <H2Title css={{ textTransform: 'uppercase' }}>Projetos</H2Title>
          <StyledProjectsContainer>
            {db.map((project, key) => (
              <ProjectCard
                key={key}
                projectPath={`/projeto/${key}`}
                projectImageUrl={project.image}
                projectTitle={project.name}
                projectShortDescription={project.description}
                projectTags={project.tags}
              ></ProjectCard>
            ))}
          </StyledProjectsContainer>
        </RightColumn>
      </ColumnsWrapper>
    </>
  );
}