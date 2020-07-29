// Video Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import Section from '../../Section'
import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Video = styled(Box)`
  background: ${theme.colors.secondary};
  border-top: ${theme.border};
  padding: 0;
  width: 100%;

  @media ${theme.mq.desktop} {
  }
`
