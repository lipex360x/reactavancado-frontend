import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/utils'

const SectionAboutProject = ({title, description, image}: SectionAboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image src={getImageUrl(image.url)} alt={image.alternativeText}/>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
