// Hero Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'

import ImgMatch from '../../../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const Hero = () => {
  // const data: HomeHeroQueryShape = useStaticQuery(graphql`
  //   query RethinkHeroQuery {
  //     allSanityHomeHero {
  //       nodes {
  //         hero {
  //           title
  //           message
  //           image {
  //             asset {
  //               fluid(maxWidth: 1080) {
  //                 src
  //                 aspectRatio
  //                 base64
  //                 sizes
  //                 srcSet
  //                 srcSetWebp
  //                 srcWebp
  //               }
  //             }
  //           }
  //           link
  //         }
  //       }
  //     }
  //   }
  // `)
  // const query = data.allSanityHomeHero.nodes[0].hero
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
          <Heading as="h4" color="tertiary">quality + value</Heading>
        </S.Sideboard>
        <S.Billboard>
          <AnimatedBox style={fadeAnimation}>
            <Heading as="h4" color="primary">
              {/* {query.title} */}
              quality + value
            </Heading>
            <Heading
              as="h1"
              mb={0}
              // fontSize={`calc(${theme.root.font.lg} * 1.25)`}
            >
              Implants{' '}
              <Box as="span" color="tertiary">
                that are<br />good for all
              </Box>
            </Heading>
          </AnimatedBox>
        </S.Billboard>
      </S.Hero>
      <S.Figure>
        {/* <ImgMatch src="pt-vista.jpg" altText="" /> */}
        {/* <Img
          fluid={query.image.asset.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={query.message}
        /> */}
      </S.Figure>
    </>
  )
}

export default Hero