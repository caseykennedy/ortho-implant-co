// JobBoard Component:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'

import ImgMatch from '../ImgMatch'
import Section from '../Section'
import Button from '../../elements/Button'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

const JobBoard = () => {
  return (
    <Flex as="section" bg="quinary" style={{ borderTop: '2px solid black' }}>
      <Box bg="tertiary" p={theme.gutter.axis} width={[0, 2 / 8]} />
      <S.JobBoard p={theme.gutter.axis} width={[1, 6 / 8]}>
        <Box width={[1, 2 / 3]} mb={[7, 8]}>
          <Heading as="h5" color="tertiary">
            Join the team
          </Heading>
          <Heading as="h3" fontSize={3} fontWeight={400}>
            At OIC, it's about working with us – being part of the team.
          </Heading>
          <Text as="p" fontSize={2}>
            There might be different departments, but we work together to break
            conventional organizational boundaries.
          </Text>
        </Box>
        <Box width={1}>
          <Heading as="h4">
            Team Member: Sales
          </Heading>
          <Heading as="h4">
            Team Member: Inventory Specialist
          </Heading>
        </Box>
      </S.JobBoard>
    </Flex>
  )
}

export default JobBoard
