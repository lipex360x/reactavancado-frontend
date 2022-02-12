import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter, FaFacebook } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/utils'
import { ImageProps } from 'types/api'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />,
  facebook: <FaFacebook />
}

type socialLinks = {
  url: string
  title: string
}

type Props = {
  name: string
  role: string
  image: ImageProps
  socialLinks: socialLinks[]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(image.url)}/>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>

    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>

    <S.Description dangerouslySetInnerHTML={{__html:description }} />
  </S.Card>
)

export default ProfileCard
