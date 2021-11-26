import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Gabriel Sobreira <br />
          Desenvolvedor Web
        </SectionTitle>
        <SectionText>
          Desenvolvedor focado em Front-end com conhecimento e prática em
          JavaScript e ecossistema React.
        </SectionText>
        <Button
          onClick={() =>
            (window.location = 'mailto:gabriellaranjasobreira@gmail.com')
          }
        >
          Entre em contato
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
