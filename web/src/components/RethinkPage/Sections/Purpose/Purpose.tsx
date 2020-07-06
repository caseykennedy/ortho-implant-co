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
        pr={[5, 10]}
        pl={theme.gutter.axis}
        style={{ position: 'relative' }}
      >
        <AnimatedBox
          width={[1, 2 / 3]}
          pr={[0, 8, 12]}
          mb={[7, 0]}
          style={fadeSpring}
        >
          <Heading as="h4" color="primary">
            purpose
          </Heading>

          <Heading as="h3" fontWeight={400}>
            <Box as="span" color="tertiary">
              World-class
            </Box>{' '}
            orthopaedic implants and technology <em>are</em> affordable.
          </Heading>

          <Text as="p">
            OIC is a purpose-driven, forward-thinking company determined to
            change the way implants are manufactured and priced.
          </Text>
        </AnimatedBox>

        <AnimatedBox width={[1, 1 / 3]}>
          <ImgMatch
            src="surf-beach-vert.jpg"
            altText="Lady climbing bouldeer."
          />
        </AnimatedBox>
      </Flex>
    </S.Purpose>
  )
}

export default Purpose
