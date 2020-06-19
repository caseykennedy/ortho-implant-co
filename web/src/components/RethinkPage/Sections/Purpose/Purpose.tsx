// Purpose Section:

// ___________________________________________________________________

import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'

import ImgMatch from '../../../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const Purpose = () => {
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
  // Only show item when in view
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-360px 0px'
  })
  const manifestoSpring = useSpring({
    config: config.molasses,
    opacity: !inView ? 0 : 1,
    transform: !inView ? theme.transform.matrix.from : theme.transform.matrix.to
  })
  const fadeSpring = useSpring({
    config: config.molasses,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Purpose pt={[7, 8]} pb={[7, 8]}>
      <Flex
        width={1}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        px={[5, 10]}
        style={{ position: 'relative' }}
      >
        <AnimatedBox
          width={[1, 2 / 3]}
          pr={[0, 8, 12]}
          mb={[7, 0]}
          style={fadeSpring}
        >
          <Heading as="h4" color="tertiary">
            purpose
          </Heading>

          <Heading as="h3" fontWeight={400}>
            <Box as="span" color="primary">
              World-class
            </Box>{' '}
            orthopaedic implants and technology are affordable.
          </Heading>

          <Text as="p">
            OIC is a purpose-driven, forward-thinking company determined to
            change the way implants are manufactured and priced.
          </Text>
        </AnimatedBox>

        <AnimatedBox
          width={[1, 1 / 3]}
          ref={manifestoRef}
          style={manifestoSpring}
        >
          <ImgMatch
            src="girl-climbing-boulder.jpg"
            altText="Lady climbing bouldeer."
          />
        </AnimatedBox>
      </Flex>
    </S.Purpose>
  )
}

export default Purpose