// Mantra Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Panel = styled(Flex)`
  flex-wrap: wrap;
  position: relative;
  top: calc(${theme.space[7]} * -2);
  background: ${theme.colors.white};  

  h2 {
    font-weight: 500;
    text-transform: uppercase;
  }

  img {
    mix-blend-mode: luminosity;
  }

  /* .content {
    flex-direction: column;
    justify-content: space-between;
  } */
`