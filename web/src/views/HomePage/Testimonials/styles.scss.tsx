// Testimonials Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'
import { transparentize } from 'polished'

// ___________________________________________________________________

const pixelHeight = '200px'

export const Testimonials = styled(Box)`
  border-top: ${theme.border};

  .quotation {
    color: ${transparentize(0.5, theme.colors.tertiary)};
    font-size: ${theme.fontSizes[7]};
    font-family: ${theme.fonts.body};
    margin-bottom: 0;
    height: 100px;
    line-height: 1;

    &:after {
      content: '"';
      position: absolute;
      top: ${theme.space[8]};
      left: 0;
    }
  }
  
  p {
    line-height: 1.4;
  }

  .swiper-container {
    /* overflow: visible; */

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};

        &:hover {
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      /* background: ${theme.colors.primary}; */
      top: 0;
      /* margin-left: auto; */
      /* bottom: initial; */
      text-align: right;
      display: none;

      @media ${theme.mq.tablet} {
        display: inherit;
      }

      &.swiper-pagination-bullets {
        span {
          cursor: pointer;
          background: ${theme.colors.white} !important;
          padding: ${theme.space[2]};
          border-radius: 0;

          @media ${theme.mq.tablet} {
            padding: ${theme.space[3]};
          }
        }
      }
    }
  }
`

export const Decorator = styled(Flex)`
  justify-content: flex-end;
  overflow: visible;
  position: relative;
  z-index: 99;

  .pixels {
    display: flex;
    justify-content: flex-end;
  }

  svg {
    height: calc(${pixelHeight} / 2.5);
    margin-bottom: calc(${pixelHeight} / -2.5);

    @media ${theme.mq.tablet} {
      height: calc(${pixelHeight} / 1.2);
      margin-bottom: calc(${pixelHeight} / -1.2);
    }

    @media ${theme.mq.desktop} {
      height: ${pixelHeight};
      margin-bottom: -${pixelHeight};
    }
  }
`
