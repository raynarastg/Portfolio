import { ProjectType, db } from '@/database';
import { StyledButton, StyledContainerButtons } from '@/src/components/Buttons';
import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { ContainerPage } from '@/src/components/ContainerPage';
import { Header } from '@/src/components/Header';
import { Icon } from '@/src/components/Icon';
import { LeftColumn } from '@/src/components/LeftColumn';
import { RightColumn } from '@/src/components/RightColumn';
import { Tag } from '@/src/components/Tag';
import { H2Title, H3Title } from '@/src/components/Title';
import { styled } from '@/stitches.config';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

const Project: NextPage<{ project?: ProjectType }> = ({ project }) => {
  const projectTags = project?.projectTags;
  const router = useRouter();

  useEffect(() => {
    if (!project) {
      router.push('/projetos');
    }
  }, [project, router]);

  return (
    project && (
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
                <Image src={project.projectPhoto.url} alt="Miniatura do Projeto" fill style={{ objectFit: 'cover' }} />
              </StyledImageContainer>
              <StyledContainerButtons>
                <Link href={project.projectDeploy} target="_blank">
                  <StyledButton>
                    <Icon css={{ color: '$coral' }}>open_in_new</Icon>
                    <p>aplicação online</p>
                  </StyledButton>
                </Link>
                <Link href={project.projectRepositorio} target="_blank">
                  <StyledButton>
                    <Icon css={{ color: '$coral' }}>code</Icon>
                    <p>repositório no github</p>
                  </StyledButton>
                </Link>
              </StyledContainerButtons>
              {/* <Buttons></Buttons> */}
            </StyledProjectLeftColumn>
            <StyledProjectRightColumn>
              <StyledDetails>
                <H2Title>{project?.projectName}</H2Title>
                <p>{project.projectLongDescription}</p>
              </StyledDetails>
              <StyledStack>
                <H3Title style="sans-serif" weight="bold">
                  Tecnologias utilizadas
                </H3Title>
                <StyledTagsContainer>
                  {projectTags?.map(
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
    )
  );
};

Project.getInitialProps = async ({ res, query }) => {
  const slug = query.slug;

  const project = db.find(project => project.slug == slug);
  return {
    project: project
      ? ({
          projectName: project.name,
          projectShortDescription: project.description,
          projectLongDescription: project.longDescription,
          projectPhoto: { url: project.image },
          projectSlug: project.slug,
          projectTags: project.tags,
          projectDeploy: project.deploy,
          projectRepositorio: project.repositorio,
        } as ProjectType)
      : undefined,
  };
};
// if (res) {
//   res.statusCode = 404;
//   res.end('Not found');
//   return {project: undefined};
// }

export default Project;
