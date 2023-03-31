import { Icon } from '@/components/Icon';
import { styled } from '@/stitches.config';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { H4Title, H5Title } from '../Title';

const StyledAccordionRoot = styled(Accordion.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  // transition: 'height 0.5s ease'
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
  height: 30,
  position: 'relative',
  width: 30,
});

const StyledLink = styled(Link, {
  paddingBottom: 8,
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
        {/* <StyledLink href="https://smartcerts.co/certificate/xyzpxery" target="_blank">
          Certificado
        </StyledLink> */}
        Durante o módulo de Desenvolvimento Web, estudei e apliquei de forma prática conteúdos como: Unix,Bash, Git,
        Internet, DOM, HTMl & CSS avançado, JS avançcado e Testes unitários.
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
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
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
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
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
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </StyledAccordionItem>
  </StyledAccordionRoot>
);
