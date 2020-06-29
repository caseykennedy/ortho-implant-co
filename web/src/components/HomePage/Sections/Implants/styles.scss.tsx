// Implants Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../Section'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Carousel = styled(Box)`
  margin-top: ${theme.space[10]};
  margin-bottom: ${theme.space[5]};
  width: 100%;

  .swiper-container {
    overflow: visible;

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        background: ${theme.colors.quinary};
        transition: ${theme.transition.all};

        &:hover {
          background: ${theme.colors.primary};
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      /* background: ${theme.colors.primary}; */
      top: -3rem;
      bottom: initial;

      text-align: left;

      &.swiper-pagination-bullets {
        span {
          cursor: pointer;
          background: ${theme.colors.white} !important;
          padding: ${theme.space[3]};
          border-radius: 0;
        }
      }
    }
  }
`

export const Card = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.tertiary};
  padding: ${theme.space[5]};
  min-height: 400px;

  color: ${theme.colors.text};
  text-transform: uppercase;
`
