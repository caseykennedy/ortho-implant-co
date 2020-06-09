// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '../../../../elements'

// ___________________________________________________________________

export const Learn = styled(Box)`
  div div ul li button {
    font-family: ${theme.fonts.heading};
    font-weight: 500 !important;
    text-transform: uppercase !important;
    text-align: left !important;
    padding: ${theme.space[3]} ${theme.space[6]} ${theme.space[3]} ${theme.space[3]} !important;
  }
`

export const Panel = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.primary};
  

  h2 {
    font-weight: 500;
    text-transform: uppercase;
  }

  img {
    mix-blend-mode: luminosity;
  }

  .content {
    flex-direction: column;
    justify-content: space-between;
  }
`
