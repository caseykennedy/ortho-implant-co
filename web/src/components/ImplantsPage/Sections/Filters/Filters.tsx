// Filters Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, config } from 'react-spring'

import useHover from '../../../../hooks/useHover'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

const Filters = () => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Filters>
      filters
    </S.Filters>
  )
}

export default Filters
