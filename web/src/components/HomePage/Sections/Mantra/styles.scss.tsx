// Mantra Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  position: relative;
  margin-top: calc(${theme.space[7]} * -2);
  background: ${theme.colors.white};  
  z-index: 99;

  img {
    mix-blend-mode: luminosity;
  }

  /* .content {
    flex-direction: column;
    justify-content: space-between;
  } */
`
