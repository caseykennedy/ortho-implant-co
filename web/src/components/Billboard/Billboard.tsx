// Billboard Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Button from '../../elements/Button'

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
  to?: string
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
      <S.Figure>
        {src && (
          <>
            <Img
              fluid={src}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={altText}
              className="img"
            />
          </>
        )}
      </S.Figure>

      {to && (
        <div className="cta">
          <Button to={!to ? '/' : to} invert={!invert ? undefined : invert}>
            {btnText}
          </Button>
        </div>
      )}

      <S.BillboardInner color={color}>
        {!to ? (
          <Box>
            <h4>
              <mark>{title}</mark>
            </h4>

            {message && <h3 dangerouslySetInnerHTML={{ __html: message }} />}
          </Box>
        ) : (
          <Link to={to}>
            <h4>
              <mark>{title}</mark>
            </h4>

            {message && <h3 dangerouslySetInnerHTML={{ __html: message }} />}
          </Link>
        )}
      </S.BillboardInner>
    </S.Billboard>
  )
}

export default Intro

// ___________________________________________________________________

const defaultProps = {
  bg: 'primary',
  message: "Let's schedule<br />a one-to-one",
  title: 'Ready to chat?',
  color: 'white'
  // btnText: 'Talk to us',
  // to: '/'
}

Intro.defaultProps = defaultProps
