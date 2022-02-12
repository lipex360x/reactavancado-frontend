import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionAgendaProps } from 'types/api'

const SectionAgenda = ({title, text1, text2}: SectionAgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text>
      <p dangerouslySetInnerHTML={{__html: text1}} />
      <p dangerouslySetInnerHTML={{__html: text2}} />
    </S.Text>
  </Container>
)

export default SectionAgenda
