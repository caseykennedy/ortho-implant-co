// Hero Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, config } from 'react-spring'
import Img from 'gatsby-image/withIEPolyfill'
import { Parallax } from 'react-scroll-parallax'

import useHomePage from '../../../../hooks/useHomePage'

import * as S from './styles.scss'
import { Box, Flex, AnimatedBox, Heading } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const Hero = () => {
  const data = useHomePage()

  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <S.Hero>
        <S.Sideboard>
          <Heading as="h5">{data.hero.title}</Heading>
        </S.Sideboard>
        <S.Billboard>
          <AnimatedBox style={fadeAnimation}>
            {/* <Heading as="h5" color="tertiary">
              {query.title}
            </Heading> */}
            <Heading
              as="h1"
              mb={0}
              dangerouslySetInnerHTML={{ __html: data.hero.message }}
            />
          </AnimatedBox>
        </S.Billboard>
      </S.Hero>
      <Parallax y={[-9, 17]}>
        <S.Figure>
          <Img
            fluid={data.hero.image.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.hero.message}
          />
        </S.Figure>
      </Parallax>
    </>
  )
}

export default Hero
