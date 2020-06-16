// Approach Section:

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

const Approach = () => {
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
    delay: 160,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <S.Approach>
      <Flex width={1} color="white" alignItems="flex-end" flexWrap="wrap">
        <Box width={[1, 1 / 3]} pr={8}>
          <ImgMatch src="running-stairs.jpg" altText="Running up stairs" />
        </Box>
        <AnimatedBox
          width={[1, 2 / 3]}
          bg="secondary"
          p={theme.gutter.axis}
          style={fadeAnimation}
        >
          <Heading as="h4" color="primary">
            a new approach
          </Heading>
          <Heading as="h3" fontSize={3} fontWeight={400}>
            Yesterday’s rules were created for just that, yesterday.
          </Heading>
          <Flex width={1} mt={`calc(${theme.space[3]} * 22)`} flexWrap="wrap">
            <Box width={[1, 1 / 3]}>
              <Text as="p">Today calls for a whole new approach...</Text>
            </Box>
            <Box width={[1, 2 / 3]} pl={[0, 7]}>
              <Text as="p">
                To not only do what’s best for your patients clinically, but
                also help them along financially. It’s time to rethink your
                options and rise to the challenge of a better tomorrow.
              </Text>
            </Box>
          </Flex>
        </AnimatedBox>
      </Flex>
    </S.Approach>
  )
}

export default Approach
