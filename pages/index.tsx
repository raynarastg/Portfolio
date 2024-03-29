import { ColumnsWrapper } from '@/src/components/ColumnsWrapper';
import { ContainerPage } from '@/src/components/ContainerPage';
import { Header } from '@/src/components/Header';
import { LeftColumn } from '@/src/components/LeftColumn';
import { RightColumn } from '@/src/components/RightColumn';
import { styled } from '@/stitches.config';
import Head from 'next/head';
import Image from 'next/image';

const StyledHomeContainer = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  gap: 24,
  justifyContent: 'flex-start',
  '@tablet': {
    gap: 16,
    flexDirection: 'column',
  },
});

const StyledPictureContainer = styled('div', {
  borderRadius: '50%',
  display: 'inline-flex',
  flexShrink: 0,
  height: 62,
  overflow: 'hidden',
  position: 'relative',
  width: 62,
  '@tablet': {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
});

const StyledHomeMessage = styled('div', {
  background: '$cinzinha',
  border: '1px solid $cinza',
  borderRadius: '0px 24px 24px 24px',
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 20,
  p: {
    fontSize: 20,
    lineHeight: '25px',
    strong: {
      fontWeight: 700,
    },
  },
  px: 36,
  py: 24,
  '@mobile': {
    p: {
      fontSize: 16,
      lineHeight: '25px',
      strong: {
        fontWeight: 700,
      },
    },
    px: 20,
    py: 16,
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ContainerPage>
        <Header pageActive='home' />
        <ColumnsWrapper>
          <LeftColumn />
          <RightColumn>
            <StyledHomeContainer>
              <StyledPictureContainer>
                <Image
                  src='/images/profilee.jpeg'
                  alt='Foto de Raynara Santiago'
                  style={{ objectFit: 'cover', transform: 'scale(1.7)', transformOrigin: '50% 10%' }}
                  fill
                />
              </StyledPictureContainer>
              <StyledHomeMessage>
                <p>
                  Olá, meu nome é Raynara e sou uma <strong>Desenvolvedora Web Full Stack </strong>
                  de 21 anos, baseada em <strong>Londrina-PR</strong>. 👋
                </p>
                <p>
                  Sou apaixonada por tecnologia e estou sempre buscando me atualizar sobre as tendências do mercado.
                  Tenho experiência em
                  <strong> Desenvolvimento Full Stack</strong>, mas atualmente estou focada em me especializar em{' '}
                  <strong>Desenvolvimento Front-end</strong>.
                </p>
                <p>
                  {' '}
                  Meu objetivo é trabalhar em projetos desafiadores que me permitam aplicar minhas habilidades de{' '}
                  <strong>Desenvolvimento Front-end </strong>
                  para criar interfaces atraentes e responsivas.
                </p>
                <p>
                  Sinta-se à vontade para explorar meu portfólio e conhecer um pouco mais sobre mim e meus projetos.
                </p>
              </StyledHomeMessage>
            </StyledHomeContainer>
          </RightColumn>
        </ColumnsWrapper>
      </ContainerPage>
    </>
  );
}
