// Approach Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

// ___________________________________________________________________

export const Approach = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  figure {
    display: none;
   
    @media ${theme.mq.tablet} {
      display: initial;
    }
  }
`
