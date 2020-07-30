// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'

import IconStyle from './styles.scss'

// Icons
// TODO: alphabetize
import Hamburger from './SVG/Hamburger'
import Carat from './SVG/Carat'
import Facebook from './SVG/Facebook'
import LinkedIn from './SVG/LinkedIn'
import Instagram from './SVG/Instagram'
import Twitter from './SVG/Twitter'
import NextArrow from './SVG/NextArrow'
import Document from './SVG/Document'
import Download from './SVG/Download'

import GridView from './SVG/GridView'
import ListView from './SVG/ListView'

import Pdf from './SVG/Pdf'
import Plus from './SVG/Plus'
import Pin from './SVG/Pin'

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
    case 'download':
      return (
        <IconStyle color={color} className={className}>
          <Download />
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
    case 'linkedIn':
      return (
        <IconStyle color={color} className="ico ico__linkedin">
          <LinkedIn />
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
    case 'pdf':
      return (
        <IconStyle className="ico ico__pdf">
          <Pdf />
        </IconStyle>
      )
    case 'plus':
      return (
        <IconStyle className="ico ico__pdf">
          <Plus />
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
