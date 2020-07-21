// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'

import IconStyle from './styles.scss'

// Icons
import Hamburger from './SVG/Hamburger'
import Carat from './SVG/Carat'
import Pin from './SVG/Pin'
import Facebook from './SVG/Facebook'
import LinkedIn from './SVG/LinkedIn'
import Instagram from './SVG/Instagram'
import Twitter from './SVG/Twitter'
import NextArrow from './SVG/NextArrow'
import Document from './SVG/Document'

import GridView from './SVG/GridView'
import ListView from './SVG/ListView'

// ___________________________________________________________________

type Props = {
  name: string
  className?: string
  color?: string
  fas?: string
}

const Icon: React.FC<Props> = ({ name, className, color, fas }) => {
  switch (name) {
    case 'carat':
      return (
        <IconStyle color={color} className={className}>
          <Carat />
        </IconStyle>
      )
    case 'document':
      return (
        <IconStyle color={color} className={className}>
          <Document />
        </IconStyle>
      )
    case 'facebook':
      return (
        <IconStyle color={color} className="ico ico__facebook">
          <Facebook />
        </IconStyle>
      )
    case 'gridView':
      return (
        <IconStyle color={color} className="ico ico__grid-view">
          <GridView />
        </IconStyle>
      )
    case 'hamburger':
      return (
        <IconStyle color={color} className={className}>
          <Hamburger />
        </IconStyle>
      )
    case 'instagram':
      return (
        <IconStyle color={color} className="ico ico__instagram">
          <Instagram />
        </IconStyle>
      )
    case 'listView':
      return (
        <IconStyle color={color} className="ico ico__list-view">
          <ListView />
        </IconStyle>
      )
    case 'nextArrow':
      return (
        <IconStyle color={color} className={className}>
          <NextArrow />
        </IconStyle>
      )
    case 'linkedIn':
      return (
        <IconStyle color={color} className="ico ico__linkedin">
          <LinkedIn />
        </IconStyle>
      )
    case 'pin':
      return (
        <IconStyle className="ico ico__pin">
          <Pin />
        </IconStyle>
      )
    case 'twitter':
      return (
        <IconStyle color={color} className="ico ico__twitter">
          <Twitter />
        </IconStyle>
      )
    default:
      return (
        <IconStyle color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </IconStyle>
      )
  }
}

export default Icon

// ___________________________________________________________________
