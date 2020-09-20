// Video Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import Section from '../../Section'
import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Video = styled(Box)`
  padding: ${theme.space[5]} 0;
  width: 100%;

  @media ${theme.mq.desktop} {
  }
`
