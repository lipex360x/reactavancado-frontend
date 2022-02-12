import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/utils'

const SectionTech = ({title, techs}: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techs.map(({ label, icon }) => (
          <S.Icon key={label}>
            <S.Icons src={getImageUrl(icon.url)} alt={icon.alternativeText} loading="lazy" />
            <S.IconsName>{label}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
