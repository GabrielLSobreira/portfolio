import React from 'react';
import { DiJavascript, DiReact, DiFirebase } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Estou estudando diversas tecnologias e realizando cursos como B7Web,
      ProgramadorBR e Origamid. Diariamente desenvolvo projetos para aplicar na
      prática os conhecimentos adquiridos.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            HTML, CSS, Javascript e <br />
            Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experiência com <br />
            React, NextJS, Bootstrap e
            <br /> Tailwind CSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Node.js, MongoDB e SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
