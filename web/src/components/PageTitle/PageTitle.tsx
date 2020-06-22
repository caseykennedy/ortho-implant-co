// PageTitle Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'
import Parallax from 'react-scroll-parallax'

import ImgMatch from '../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  altText: string
  image?: object
  message: string
  title: string
}

const PageTitle: React.FC<Props> = ({ altText, image, message, title }) => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <S.PageTitle>
        <S.Sideboard />
        <S.Billboard>
          <AnimatedBox style={fadeAnimation}>
            <Heading as="h5" color="primary">
              {title}
            </Heading>

            <Heading as="h1" mb={0}>
              {message}
              {/* <Text as="span" color="tertiary">
                orthopaedic implants
              </Text> */}
            </Heading>
          </AnimatedBox>
        </S.Billboard>
      </S.PageTitle>

      <S.Figure>
        {image && (
          <Img
            fluid={image}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={altText}
          />
        )}
      </S.Figure>
    </>
  )
}

export default PageTitle
