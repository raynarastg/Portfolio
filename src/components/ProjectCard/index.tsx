import { styled } from '@/stitches.config';
import { ComponentProps } from '@stitches/react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../Tag';
import { H3Title } from '../Title';

const StyledProjectCard = styled('div', {
  background: '$cinzinha',
  border: '1px solid $cinza',
  boxShadow: '2px 4px 12px 0 rgba(46,64,83,0.15)',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '2px 4px 12px 0 rgba(46,64,83,0.30)',
  },
  display: 'inline-flex',
  flex: 0,
  flexDirection: 'column',
  minWidth: 269,
  maxWidth: 295,
  minHeight: 400,
  transition: 'all 0.25s ease',
});

const StyledContainerProjectImage = styled('div', {
  background: '$petroleo',
  display: 'flex',
  paddingBottom: '56.25%',
  position: 'relative',
});

const StyledProjectDetails = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  justifyContent: 'flex-start',
  px: 24,
  py: 16,
  p: {
    fontSize: 14,
    '@mobile': {
      fontSize: 12,
    },
  },
  textAlign: 'center',
});

const StyledTagsContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'center',
  marginTop: 8,
});

type ProjectCardProps = ComponentProps<typeof StyledProjectCard> & {
  projectImageUrl: string;
  projectShortDescription: string;
  projectTags: Tag[];
  projectTitle: string;
  projectPath: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectImageUrl,
  projectShortDescription,
  projectTags,
  projectPath,
  ...props
}) => {
  return (
    <StyledProjectCard {...props}>
      <Link href={projectPath}>
        <StyledContainerProjectImage>
          {projectImageUrl && (
            <Image src={projectImageUrl} alt="miniatura do projeto" fill style={{ objectFit: 'cover', }} quality={100} />
          )}
        </StyledContainerProjectImage>
        <StyledProjectDetails>
          <H3Title style="sans-serif" weight="bold" css={{ textAlign: 'center' }}>
            {projectTitle}
          </H3Title>
          <p>{projectShortDescription}</p>

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
        </StyledProjectDetails>
      </Link>
    </StyledProjectCard>
  );
};
