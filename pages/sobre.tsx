import { hardSkils, softSkils } from '@/database';
import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { ContainerPage } from '@/src/components/ContainerPage';
import { CoursesAccordion } from '@/src/components/CoursesAccordion';
import { StyledContainerGraduations, StyledContainerInfosGraduations } from '@/src/components/Graduation';
import { Header } from '@/src/components/Header';
import { LeftColumn } from '@/src/components/LeftColumn';
import { RightColumn } from '@/src/components/RightColumn';
import { StyledHardSkills } from '@/src/components/Skills';
import { Tag } from '@/src/components/Tag';
import { H2Title, H3Title, H5Title } from '@/src/components/Title';
import { styled } from '@/stitches.config';
import Image from 'next/image';

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

const StyledContainerHardSkills = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  flexWrap: 'wrap',
  maxHeight: 220,
  '@bp1': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 340,
    border: 8,
  },
  '@bp2': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 340,
  },
});

const StyledContainerSoftSkills = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  flexWrap: 'wrap',
});

const StyledLine = styled('p', {
  width: 0,
  height: 45,
  border: '1px dashed $elefante',
  flex: 'none',
  order: 1,
});

export default function About() {
  return (
    <ContainerPage>
      <Header pageActive="sobre" />
      <ColumnsWrapper>
        <LeftColumn />
        <RightColumn css={{ flexDirection: 'column', gap: 24 }}>
          <H2Title css={{ textTransform: 'uppercase' }}>Sobre mim</H2Title>
          <StyledAboutContainer>
            <StyledGraduation>
              <H3Title style="sans-serif" weight="bold">
                👩🏻‍🎓 Formação acadêmica
              </H3Title>
              <StyledContainerGraduations>
                <StyledContainerInfosGraduations>
                  <p>2017 - 2019</p>
                  <p>2022 - 2023</p>
                </StyledContainerInfosGraduations>
                <StyledContainerInfosGraduations>
                  <StyledLine />
                </StyledContainerInfosGraduations>
                <StyledContainerInfosGraduations>
                  <p>
                    ENSINO MÉDIO,<span> PRESIDENTE KENNEDY</span>
                  </p>
                  <p>
                    DESENVOLVIMENTO WEB FULL STACK,<span> TRYBE</span>
                  </p>
                </StyledContainerInfosGraduations>
              </StyledContainerGraduations>
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
              <H5Title>HARD SKILLS</H5Title>
              <StyledContainerHardSkills>
                {hardSkils.map((el, index) => (
                  <StyledHardSkills key={index}>
                    <Image src={el.pictureOfSkill} alt="miniatura da skill" height={30} width={30} />
                    <p>{el.skill}</p>
                  </StyledHardSkills>
                ))}
              </StyledContainerHardSkills>
              <H5Title>SOFT SKILLS</H5Title>
              <StyledContainerSoftSkills>
                {softSkils.map((el, index) => (
                  <Tag type="soft" key={index}>
                    {el.skill}
                  </Tag>
                ))}
              </StyledContainerSoftSkills>
            </StyledSkills>
          </StyledAboutContainer>
        </RightColumn>
      </ColumnsWrapper>
    </ContainerPage>
  );
}
