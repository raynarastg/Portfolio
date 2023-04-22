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
  '@mobile': {
    width: '100%',
    alignItems: 'center',
    p: {
      fontSize: 14,
    },
  },
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
  '@mobile': {
    textAlign: 'center',
    alignItems: 'center',
    p: {
      fontSize: 14,
    },
  },
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

interface ProjectProps {
  project?: ProjectType | undefined;
}

const ProjectPage: NextPage<ProjectProps> = ({ project }) => {
  const router = useRouter();

  useEffect(() => {
    if (!project) {
      router.push('/projetos');
    }
  }, [project, router]);

  if (!project) return null;

  return (
    <ContainerPage>
      <Header />
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn
          css={{
            flexDirection: ' row',
            gap: 24,
            alignItems: 'flex-start',
            '@mobile': { flexDirection: 'column' },
          }}
        >
          <StyledProjectLeftColumn>
            <StyledLink href="/projetos">
              <Icon css={{ color: '$coral' }}>arrow_back_ios</Icon> <p>ver todos os projetos</p>
            </StyledLink>
            <StyledImageContainer css={{ backgroundColor: '$petroleo',  }}>
              <Image src={project.projectPhoto?.url} alt="Miniatura do Projeto" quality={100} fill style={{ objectFit: 'cover' }} />
            </StyledImageContainer>
            <StyledContainerButtons css={{'@mobile': { flexDirection: 'row'}}}>
              {project.projectDeploy ? (
                <>
                  <Link href={project.projectDeploy} target="_blank">
                    <StyledButton>
                      <Icon css={{ color: '$coral' }}>open_in_new</Icon>
                      <p>aplicação online</p>
                    </StyledButton>
                  </Link>{' '}
                </>
              ) : (
                <StyledButton>
                  <p className="taxado">aplicação online</p>
                </StyledButton>
              )}
              <Link href={project.projectRepositorio} target="_blank">
                <StyledButton>
                  <Icon css={{ color: '$coral' }}>code</Icon>
                  <p>repositório no github</p>
                </StyledButton>
              </Link>
            </StyledContainerButtons>
          </StyledProjectLeftColumn>
          <StyledProjectRightColumn>
            <StyledDetails>
              <H2Title>{project.projectName}</H2Title>
              <p>{project.projectLongDescription}</p>
            </StyledDetails>
            <StyledStack>
              <H3Title style="sans-serif" weight="bold">
                Tecnologias utilizadas
              </H3Title>
              <StyledTagsContainer>
                {project.projectTags.map(
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
};

ProjectPage.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  const project = db.find(project => project.projectSlug == slug);

  return { project };
};

export default ProjectPage;
