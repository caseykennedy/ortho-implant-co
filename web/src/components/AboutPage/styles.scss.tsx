// AboutPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const AboutPage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`
