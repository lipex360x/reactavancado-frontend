import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { SectionHeaderProps } from 'types/api'
import { getImageUrl } from 'utils/utils'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = ({ logo, sectionHero }: SectionHeaderProps) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{sectionHero.title}</S.Title>
          <S.Description>
            {sectionHero.description}
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href={sectionHero.button.url}
              onClick={onClick}
              wide
            >
              {sectionHero.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(sectionHero.hero.url)}
          alt={sectionHero.hero.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
