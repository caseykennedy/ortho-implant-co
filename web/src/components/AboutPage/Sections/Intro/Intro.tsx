// Intro Section:

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

const Intro = () => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Intro>
      <S.About>
        <Box width={[1, 2 / 3]} bg="secondary" p={[5, 9]}>
          <Heading as="h3" fontWeight={500} className="t--uppercase">
            Our mission is simple:
          </Heading>
          <Text as="p" mb={0}>
            Lower the cost of orthopaedic procedures by developing more
            affordable implants with the perfect balance of quality, service and
            price for surgeons, hospitals and patients.
          </Text>
        </Box>
      </S.About>

      <S.Values>
        <Box width={[1, 1 / 3]}>
          <ImgMatch
            src="girl-climbing-boulder.jpg"
            altText="Lady climbing bouldeer."
          />
        </Box>

        <Box width={[1, 2 / 3]}>asdf</Box>
      </S.Values>
    </S.Intro>
  )
}

export default Intro
