// Hero Section:

import React from 'react'
import { useSpring, config } from 'react-spring'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Parallax } from 'react-scroll-parallax'

import useHomePage from '@/hooks/useHomePage'

import * as S from './styles.scss'
import { AnimatedBox, Heading, Box } from '@/components/elements'
import theme from '../../../../config/theme'

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
            <Heading
              as="h1"
              mb={0}
              dangerouslySetInnerHTML={{ __html: data.hero.message }}
            />
          </AnimatedBox>
          {/* <Box>
            <Heading
              as="h1"
              mb={0}
              dangerouslySetInnerHTML={{ __html: data.hero.message }}
            />
          </Box> */}
        </S.Billboard>
      </S.Hero>
      <Parallax y={[-12, 17]}>
        <S.Figure>
          <GatsbyImage
            image={data.hero.image.asset.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.hero.message}
            loading="eager"
          />
        </S.Figure>
      </Parallax>
    </>
  )
}

export default Hero
