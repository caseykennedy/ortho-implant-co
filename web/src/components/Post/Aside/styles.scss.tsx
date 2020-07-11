// Aside Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Aside = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.quinary};
  border-top: ${theme.border};

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    border-top: none;
  }
`
