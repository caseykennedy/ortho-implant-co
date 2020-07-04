// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;
  background: ${theme.colors.secondary};

  @media ${theme.mq.tablet} {
  }
`
