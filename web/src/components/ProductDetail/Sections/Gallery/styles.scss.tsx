// Gallery Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../../elements'

import theme from '../../../../../config/theme'

// ___________________________________________________________________

export const Gallery = styled(Box)`
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media ${theme.mq.tablet} {
  }
`
