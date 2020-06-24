// Billboard Component:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'

import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Button from '../../elements/Button'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  altText?: string
  bg?: string
  message?: string
  title?: string
  src?: string
}

const Intro: React.FC<Props> = ({ altText, bg, message, title, src }) => {
  return (
    <Section bg={bg} border={true}>
      {src && altText && (
        <S.Figure>
          <ImgMatch src={src} altText={altText} />
        </S.Figure>
      )}

      <div className="cta">
        <Button to={`/implants`}>Talk to us</Button>
      </div>

      <S.Billboard>
        <h4>{title}</h4>

        {message && <h3 dangerouslySetInnerHTML={{ __html: message }} />}
      </S.Billboard>
    </Section>
  )
}

export default Intro

// ___________________________________________________________________

const defaultProps = {
  bg: 'primary',
  message: "Let's schedule<br />a one-to-one",
  title: 'Ready to chat?',
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
}

Intro.defaultProps = defaultProps
