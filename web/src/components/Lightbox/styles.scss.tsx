// Lightbox Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Lightbox from 'react-spring-lightbox'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Gallery = styled(Lightbox)`

  @media ${theme.mq.tablet} {
    /* height: calc(30vh - ${theme.headerHeight}); */
  }
`
