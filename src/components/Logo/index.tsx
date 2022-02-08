import React from 'react'

import { ImageProps, SectionHeaderProps } from 'types/api'
import * as S from './styles'

const Logo = ({ url, alternativeText }: ImageProps) => <S.LogoWrapper src={ url } alt={ alternativeText } />


export default Logo
