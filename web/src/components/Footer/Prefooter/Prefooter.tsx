// Prefooter Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Button from '../../../elements/Button'
import ImgMatch from '../../ImgMatch'
import Logo from '../../Logo'

import * as S from './styles.scss'
import { Box, Flex, Heading } from '../../../elements'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Prefooter = () => {
  // const data: HomeHeroQueryShape = useStaticQuery(graphql`
  //   query HomeHeroQuery {
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
  return (
    <>
      <S.Prefooter>
        <S.Sideboard>
          <Logo />
        </S.Sideboard>
        <S.Billboard>
          <Box className="cta">
            <Button to="/contact" invert={true}>
              Talk to us
            </Button>
          </Box>
          <Box width={1} mt={9}>
            {/* <Heading as="h5">
              Get to know us
            </Heading> */}
            <Heading as="h2" mb={0}>
              Let’s schedule
              <br />a one-to-one
            </Heading>
          </Box>
        </S.Billboard>
      </S.Prefooter>
      <S.Figure>
        <ImgMatch src="rafting.jpg" altText="People rafting" />
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

export default Prefooter
