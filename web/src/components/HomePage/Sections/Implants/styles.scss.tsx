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

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};
        &.swiper-slide-active {
          background: ${theme.colors.primary};
        }
      }
    }

    .swiper-scrollbar {
      background: rgba(255, 255, 255, 0.5);
      bottom: -2rem;
      max-height: 1px;
      overflow: visible;

      .swiper-scrollbar-drag {
        background: ${theme.colors.primary};
        border-radius: 0px !important;
        min-height: 10px;
        position: relative;
        top: -5px;
      }
    }
  }
`

export const Card = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.tertiary};
  padding: ${theme.space[5]};
  min-height: 500px;

  color: ${theme.colors.text};
  text-transform: uppercase;
`
