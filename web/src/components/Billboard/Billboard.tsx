// Billboard Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Button from '../../elements/Button'

import IllustrationOne from '../IllustrationOne'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  altText?: string
  bg?: string
  btnText?: string
  color?: string
  invert?: boolean
  message?: string
  title?: string
  to: string
  src?: object
}

const Intro: React.FC<Props> = ({
  altText,
  bg,
  btnText,
  color,
  invert,
  message,
  title,
  to,
  src
}) => {
  return (
    <S.Billboard bg={bg} border={true} color={color} overflow="hidden">
      {src && (
        <S.Figure>
          {/* <ImgMatch src={src} altText={altText} /> */}
          <Img
            fluid={src}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={altText}
            className="img"
          />
        </S.Figure>
      )}

      <div className="cta">
        <Button to={to} invert={!invert ? undefined : invert}>
          {btnText}
        </Button>
      </div>

      <S.BillboardInner color={color}>
        <Link to={to}>
          <h4>
            <mark>{title}</mark>
          </h4>

          {message && <h3 dangerouslySetInnerHTML={{ __html: message }} />}
        </Link>
      </S.BillboardInner>

      {/* <S.Illustration>
        <IllustrationOne />
      </S.Illustration> */}
    </S.Billboard>
  )
}

export default Intro

// ___________________________________________________________________

const defaultProps = {
  bg: 'primary',
  btnText: 'Talk to us',
  message: "Let's schedule<br />a one-to-one",
  title: 'Ready to chat?',
  color: 'white',
  to: '/'
}

Intro.defaultProps = defaultProps
