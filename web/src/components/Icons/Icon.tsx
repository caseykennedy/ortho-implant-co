// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

import React from 'react'
import * as S from './styles.scss'

// Icons
import Carat from './SVG/Carat'
import Document from './SVG/Document'
import Download from './SVG/Download'
import ExternalLink from './SVG/ExternalLink'
import Facebook from './SVG/Facebook'
import GridView from './SVG/GridView'
import Hamburger from './SVG/Hamburger'
import Instagram from './SVG/Instagram'
import LinkedIn from './SVG/LinkedIn'
import ListView from './SVG/ListView'
import NextArrow from './SVG/NextArrow'
import Pdf from './SVG/Pdf'
import Plus from './SVG/Plus'
import Pin from './SVG/Pin'
import Twitter from './SVG/Twitter'

type Props = {
  name: string
  className?: string
  color?: string
  fas?: string
}

const Icon: React.FC<Props> = ({ className, color, fas, name }) => {
  switch (name) {
    case 'arrow':
      return (
        <S.Icon color={color} className={className}>
          <NextArrow />
        </S.Icon>
      )
    case 'carat':
      return (
        <S.Icon color={color} className={className}>
          <Carat />
        </S.Icon>
      )
    case 'document':
      return (
        <S.Icon color={color} className={className}>
          <Document />
        </S.Icon>
      )
    case 'download':
      return (
        <S.Icon color={color} className={className}>
          <Download />
        </S.Icon>
      )
    case 'external-link':
      return (
        <S.Icon color={color} className={className}>
          <ExternalLink />
        </S.Icon>
      )
    case 'facebook':
      return (
        <S.Icon color={color} className={className}>
          <Facebook />
        </S.Icon>
      )
    case 'gridView':
      return (
        <S.Icon color={color} className={className}>
          <GridView />
        </S.Icon>
      )
    case 'hamburger':
      return (
        <S.Icon color={color} className={className}>
          <Hamburger />
        </S.Icon>
      )
    case 'instagram':
      return (
        <S.Icon color={color} className={className}>
          <Instagram />
        </S.Icon>
      )
    case 'linkedIn':
      return (
        <S.Icon color={color} className={className}>
          <LinkedIn />
        </S.Icon>
      )
    case 'listView':
      return (
        <S.Icon color={color} className={className}>
          <ListView />
        </S.Icon>
      )
    case 'pdf':
      return (
        <S.Icon color={color} className={className}>
          <Pdf />
        </S.Icon>
      )
    case 'plus':
      return (
        <S.Icon color={color} className={className}>
          <Plus />
        </S.Icon>
      )
    case 'pin':
      return (
        <S.Icon color={color} className={className}>
          <Pin />
        </S.Icon>
      )
    case 'twitter':
      return (
        <S.Icon color={color} className={className}>
          <Twitter />
        </S.Icon>
      )
    default:
      return (
        <S.Icon color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </S.Icon>
      )
  }
}

export default Icon
