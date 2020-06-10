// Implants Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Carousel = styled(Box)`
  margin-top: ${theme.space[10]};
  margin-bottom: ${theme.space[5]};
  width: 100%;

  .swiper-container {
    overflow: visible;

    .swiper-scrollbar {
      background: rgba(255, 255, 255, 0.5);
      bottom: -2rem;

      .swiper-scrollbar-drag {
        background: ${theme.colors.primary};
      }
    }
  }
`
