import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'
import { numberToCurrency } from 'utils/utils'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({totalPrice, numberInstallments, priceInstallment, benefits, button}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{numberToCurrency({ value: totalPrice })}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> {numberToCurrency({value: priceInstallment})}
      </S.DiscountPrice>
    </S.Prices>

    <S.BenefitsList>
      {benefits.map(({title}, index) => (
          <S.BenefitsItem key={index}>
          { title }
          </S.BenefitsItem>
      ))}
    </S.BenefitsList>

    <Button
      href={button.url}
      onClick={onClick}
      withPrice
    >
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>{numberToCurrency({ value: totalPrice })}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>{numberToCurrency({ value: (numberInstallments * priceInstallment) })}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
