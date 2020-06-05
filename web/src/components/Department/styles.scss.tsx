// Department Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Department = styled(Flex)`
  flex-wrap: wrap;
  justify-content: stretch;
  width: 100%;
  border-left: none;

  @media ${theme.mq.tablet} {
  }
`
