// Gallery Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex, Heading } from '@/components/elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Gallery = styled(Box)`
  flex-wrap: wrap;
  width: 100%;
  position: sticky;
  top: ${theme.space[5]};
  overflow: hidden;
  padding: 0 0 ${theme.space[7]};

  @media ${theme.mq.tablet} {
  }

  .swiper-container {
    overflow: visible;

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        background: transparent;
        transition: ${theme.transition.all};

        &:hover {
          /* background: ${theme.colors.quaternary}; */
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      /* background: ${theme.colors.primary}; */
      /* top: -3rem; */
      bottom: initial;

      text-align: center;

      &.swiper-pagination-bullets {
        span {
          cursor: pointer;
          background: ${theme.colors.secondary} !important;
          padding: ${theme.space[2]};
          border-radius: 0;
        }
      }
    }
  }
`
