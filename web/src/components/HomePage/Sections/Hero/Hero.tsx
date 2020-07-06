// Hero Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, config } from 'react-spring'
import Img from 'gatsby-image/withIEPolyfill'
import { Parallax } from 'react-scroll-parallax'

import * as S from './styles.scss'
import { Box, Flex, AnimatedBox, Heading } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const Hero = () => {
  const data: HomeHeroQueryShape = useStaticQuery(graphql`
    query HomeHeroQuery {
      allSanityHomeHero {
        nodes {
          hero {
            title
            message
            image {
              asset {
                fluid(maxWidth: 1080) {
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            link
          }
        }
      }
    }
  `)
  const query = data.allSanityHomeHero.nodes[0].hero
  // console.log('---_- Hero -_---')
  // console.log(query)
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
          <Heading as="h5">{query.title}</Heading>
        </S.Sideboard>
        <S.Billboard>
          <AnimatedBox style={fadeAnimation}>
            {/* <Heading as="h5" color="tertiary">
              {query.title}
            </Heading> */}
            <Heading
              as="h1"
              mb={0}
              dangerouslySetInnerHTML={{ __html: query.message }}
            />
          </AnimatedBox>
        </S.Billboard>
      </S.Hero>
      <Parallax y={[-9, 17]}>
        <S.Figure>
          <Img
            fluid={query.image.asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={query.message}
          />
        </S.Figure>
      </Parallax>
    </>
  )
}

export default Hero
