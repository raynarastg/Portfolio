import { Icon } from '@/components/Icon';
import { styled } from '@/stitches.config';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import React from 'react';
import { H4Title, H5Title } from '../Title';

const StyledAccordionRoot = styled(Accordion.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const StyledAccordionItem = styled(Accordion.Item, {
  display: 'flex',
  flexDirection: 'column',
  px: 24,
  py: 16,
  gap: 24,
  border: '1px solid $cinza',
  background: '$cinzinha',
  position: 'relative',
  transition: 'all 1s ease',
  '@mobile': {
    p: {
      fontSize: 14,
    },
  },
});
const StyledAccordionHeader = styled(Accordion.Header, {
  display: 'flex',
  position: 'relative',
  "&[data-state='open'] .chevron": {
    transform: 'rotate(180deg)',
  },
});
const StyledAccordionTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  width: '100%',
  height: '100%',
  display: 'flex',
});

const AccordionTrigger = React.forwardRef<HTMLButtonElement, { children?: any }>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordionHeader>
      <StyledAccordionTrigger {...props} ref={forwardedRef}>
        {children}
      </StyledAccordionTrigger>
    </StyledAccordionHeader>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<HTMLDivElement, { children?: any }>(
  ({ children, ...props }: { children?: any }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = 'AccordionContent';

const StyledTriggerDescription = styled('div', {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  width: '100%',
});

const StyledImageIcon = styled('div', {
  height: 25,
  position: 'relative',
  width: 25,
  flexShrink: 0,
  '@mobile': {
    height: 20,
    width: 20,
  },
});

export const CoursesAccordion: React.FC = () => (
  <StyledAccordionRoot type="multiple">
    <StyledAccordionItem className="AccordionItem" value="item-1">
      <AccordionTrigger>
        <StyledTriggerDescription>
          <StyledImageIcon>
            <Image src="/images/icon-certificate.png" alt="miniatura-icon" fill />
          </StyledImageIcon>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <H5Title style="sans-serif" css={{ color: '$cinza', fontWeight: 700 }}>
              FEVEREIRO 2022
            </H5Title>
            <H4Title style="sans-serif" css={{}}>
              <span style={{ fontWeight: 700 }}>CURSO INTRODUTÓRIO JAVASCRIPT</span>, TRYBE
            </H4Title>
          </div>
          <Icon
            size="small"
            style="outlined"
            css={{
              position: 'absolute',
              right: 0,
              transition: 'all 0.25s linear',
            }}
            className="chevron"
          >
            expand_more
          </Icon>
        </StyledTriggerDescription>
      </AccordionTrigger>
      <AccordionContent>
        <p>
          No curso introdutório de JavaScript, aprendi sobre quando e por que utilizar <strong>let</strong> e{' '}
          <strong>const</strong>, <strong>if</strong> e <strong>else</strong>, e <strong>laços de repetições</strong>.
        </p>
      </AccordionContent>
    </StyledAccordionItem>
    <StyledAccordionItem className="AccordionItem" value="item-2">
      <AccordionTrigger>
        <StyledTriggerDescription>
          <StyledImageIcon>
            <Image src="/images/icon-certificate.png" alt="miniatura-icon" fill />
          </StyledImageIcon>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <H5Title style="sans-serif" css={{ color: '$cinza', fontWeight: 700 }}>
              JUNHO 2022
            </H5Title>
            <H4Title style="sans-serif" css={{}}>
              <span style={{ fontWeight: 700 }}>FUNDAMENTOS DO DESENVOLVIMENTO WEB</span>, TRYBE
            </H4Title>
          </div>
          <Icon
            size="small"
            style="outlined"
            css={{
              position: 'absolute',
              right: 0,
              transition: 'all 0.25s linear',
            }}
            className="chevron"
          >
            expand_more
          </Icon>
        </StyledTriggerDescription>
      </AccordionTrigger>
      <AccordionContent>
        <p>
          {' '}
          Durante o módulo de Fundamentos do Desenvolvimento Web, estudei e apliquei de forma prática conteúdos como: Unix,Bash, Git,
          Internet, DOM, HTMl & CSS avançado, JS avançcado e Testes unitários.
          <br/>
          Desenvolvendo no total 6 projetos, 1 deles tendo sido desenvolvido em dupla.
        </p>
      </AccordionContent>
    </StyledAccordionItem>
    <StyledAccordionItem className="AccordionItem" value="item-3">
      <AccordionTrigger>
        <StyledTriggerDescription>
          <StyledImageIcon>
            <Image src="/images/icon-certificate.png" alt="miniatura-icon" fill />
          </StyledImageIcon>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <H5Title style="sans-serif" css={{ color: '$cinza', fontWeight: 700 }}>
              SETEMBRO 2022
            </H5Title>
            <H4Title style="sans-serif" css={{}}>
              <span style={{ fontWeight: 700 }}>DESENVOLVIMENTO FRONT-END</span>, TRYBE
            </H4Title>
          </div>
          <Icon
            size="small"
            style="outlined"
            css={{
              position: 'absolute',
              right: 0,
              transition: 'all 0.25s linear',
            }}
            className="chevron"
          >
            expand_more
          </Icon>
        </StyledTriggerDescription>
      </AccordionTrigger>
      <AccordionContent>
        <p>
          Durante o módulo de Desenvolvimento Fron-end, estudei e apliquei de forma prática conteúdos como: React,
          incluindo Componentes, Estado e Eventos, Componentes Controlados, Ciclo de Vida, Router, Testes com RTL, Redux
          com React, Context API, React Hooks, metodologias ágeis e habilidades comportamentais.
          <br/>
          Desenvolvendo no total 10 projetos, 1 deles tendo sido desenvolvido em grupo. 
        </p>
      </AccordionContent>
    </StyledAccordionItem>
    <StyledAccordionItem className="AccordionItem" value="item-4">
      <AccordionTrigger>
        <StyledTriggerDescription>
          <StyledImageIcon>
            <Image src="/images/icon-certificate.png" alt="miniatura-icon" fill />
          </StyledImageIcon>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <H5Title style="sans-serif" css={{ color: '$cinza', fontWeight: 700 }}>
              FEVEREIRO 2023
            </H5Title>
            <H4Title style="sans-serif" css={{}}>
              <span style={{ fontWeight: 700 }}>DESENVOLVIMENTO BACK-END</span>, TRYBE
            </H4Title>
          </div>
          <Icon
            size="small"
            style="outlined"
            css={{
              position: 'absolute',
              right: 0,
              transition: 'all 0.25s linear',
            }}
            className="chevron"
          >
            expand_more
          </Icon>
        </StyledTriggerDescription>
      </AccordionTrigger>
      <AccordionContent>
        <p>
          Durante o módulo de Desenvolvimento Back-end, estudei e apliquei de forma prática conteúdos como: Docker,
          banco de dados SQL e NoSQL, Node.js e Express, Mocha, Chai e Sinon, construção de APIs em camadas, REST, JWT,
          ORM, deploy, TypeScript, POO, SOLID, conceitos de CI/CD com Github Actions.
          <br />
          Desenvolvendo no total 12 projetos, 1 deles sendo full-stack e tendo sido desenvolvido em grupo. 
        </p>
      </AccordionContent>
    </StyledAccordionItem>
    <StyledAccordionItem className="AccordionItem" value="item-4">
      <AccordionTrigger>
        <StyledTriggerDescription>
          <StyledImageIcon>
            <Image src="/images/icon-certificate.png" alt="miniatura-icon" fill />
          </StyledImageIcon>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <H5Title style="sans-serif" css={{ color: '$cinza', fontWeight: 700 }}>
              ABRIL 2023
            </H5Title>
            <H4Title style="sans-serif" css={{}}>
              <span style={{ fontWeight: 700 }}>CIÊNCIA DA COMPUTAÇÃO</span>, TRYBE
            </H4Title>
          </div>
          <Icon
            size="small"
            style="outlined"
            css={{
              position: 'absolute',
              right: 0,
              transition: 'all 0.25s linear',
            }}
            className="chevron"
          >
            expand_more
          </Icon>
        </StyledTriggerDescription>
      </AccordionTrigger>
      <AccordionContent>
        <p>
          Durante o módulo de Ciência da Computação, estudei e apliquei de forma prática conteúdos como: Python,
          Pytest, POO em Python, SOLID, Paradigmas, Padrões de projeto, Raspagem e análise de dados, Algoritmos e Recursividade.
          <br />
          Desenvolvendo no total 6 projetos.
        </p>
      </AccordionContent>
    </StyledAccordionItem>
  </StyledAccordionRoot>
);
