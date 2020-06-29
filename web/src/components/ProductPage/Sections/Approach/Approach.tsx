// Approach Section:

// ___________________________________________________________________

import React from 'react'
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

const Approach = () => {
  const [manifestoRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-360px 0px'
  })
  const manifestoSpring = useSpring({
    config: config.molasses,
    opacity: !inView ? 0 : 1,
    transform: !inView ? theme.transform.matrix.from : theme.transform.matrix.to
  })
  const fadeAnimation = useSpring({
    config: config.molasses,
    // delay: 160,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <S.Approach>
      <Flex width={1} color="white" flexWrap="wrap" alignItems="flex-end">
        <AnimatedBox
          bg="quinary"
          width={[1, 1 / 3]}
        >
          <Parallax className="custom-class" y={[-25, 15]} tagOuter="figure">
            <ImgMatch src="running-stairs.jpg" altText="Running up stairs" />
          </Parallax>
        </AnimatedBox>

        <AnimatedBox
          width={[1, 2 / 3]}
          bg="secondary"
          p={theme.gutter.axis}
          style={fadeAnimation}
        >
          <Heading as="h4" color="primary">
            a new approach
          </Heading>

          <Heading as="h3" fontWeight={400}>
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
