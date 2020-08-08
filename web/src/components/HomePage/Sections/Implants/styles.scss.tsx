// Implants Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../Section'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Carousel = styled(Box)`
  /* background: ${theme.colors.white}; */
  /* margin-top: ${theme.space[5]}; */
  /* margin-bottom: ${theme.space[5]}; */
  width: 100%;

  .swiper-container {
    overflow: visible;

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        /* background: ${theme.colors.tertiary}; */
        transition: ${theme.transition.all};

        &:hover {
          background: ${theme.colors.tertiary};
          cursor: pointer;
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      /* background: ${theme.colors.primary}; */
      top: -${theme.space[7]};
      left: ${theme.space[5]};
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

  background: ${theme.colors.primary};
  padding: ${theme.space[5]};
  min-height: 400px;

  color: ${theme.colors.text};
  text-transform: uppercase;
`
