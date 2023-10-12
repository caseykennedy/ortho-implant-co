// Billboard Component:

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import Button from '@/components/elements/Button'

import * as S from './styles.scss'
import { Box } from '@/components/elements'

type Props = {
  altText?: string
  bg?: string
  btnText?: string
  color?: string
  invert?: boolean
  message?: string
  title?: string
  to?: string
  src?: IGatsbyImageData
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
            <GatsbyImage
              image={src}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={altText || ''}
              className="img"
              loading="lazy"
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

const defaultProps = {
  bg: 'primary',
  message: "Let's schedule<br />a one-on-one",
  title: 'Ready to chat?',
  color: 'white'
  // btnText: 'Talk to us',
  // to: '/'
}

Intro.defaultProps = defaultProps
