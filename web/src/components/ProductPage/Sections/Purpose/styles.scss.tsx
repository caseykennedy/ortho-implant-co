// Purpose Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Purpose = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
    /* height: calc(30vh - ${theme.headerHeight}); */
  }
`
