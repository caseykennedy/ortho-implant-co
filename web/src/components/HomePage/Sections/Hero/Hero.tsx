// Hero Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Parallax } from 'react-scroll-parallax'

import * as S from './styles.scss'
import { Box, Flex, Heading } from '../../../../elements'
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
  return (
    <>
      <S.Hero>
        <S.Sideboard>
          {/* <Heading as="h5">{query.title}</Heading> */}
        </S.Sideboard>
        <S.Billboard>
          <Box>
            {/* <Heading as="h5" color="tertiary">
              {query.title}
            </Heading> */}
            <Heading as="h1" mb={0}>
              {query.message}
            </Heading>
          </Box>
        </S.Billboard>
      </S.Hero>
      <Parallax y={[-5, 10]}>
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
