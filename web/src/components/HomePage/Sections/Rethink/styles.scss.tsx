// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Learn = styled(Box)`
  div {
    border-bottom: none !important;

    ul {
      li button {
        font-family: ${theme.fonts.heading};
        font-size: ${theme.fontSizes[3]};
        font-weight: 500 !important;
        text-transform: uppercase !important;
        text-align: left !important;

        /* background: ${theme.colors.secondary} !important; */
        padding: ${theme.space[3]} ${theme.space[6]} ${theme.space[3]}
          ${theme.space[3]} !important;
      }
    }
  }

  .swiper-container {
    overflow: visible;

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        background: ${theme.colors.quaternary};
        transition: ${theme.transition.all};

        &:hover {
          /* background: ${theme.colors.quaternary}; */
          /* cursor: pointer; */
        }

        &.swiper-slide-active {
          background: ${theme.colors.primary};
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
          background: ${theme.colors.secondary} !important;
          padding: ${theme.space[3]};
          border-radius: 0;
        }
      }
    }
  }
`

export const Panel = styled(Flex)`
  flex-wrap: wrap;
  cursor: grab;
  /* background: ${theme.colors.primary}; */

  h2 {
    font-weight: 500;
    text-transform: uppercase;
  }

  img {
    mix-blend-mode: luminosity;
  }

  .content {
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Decorator = styled(Flex)`
  position: absolute;
  top: 7rem;
  right: -2rem;

  svg {
  }
`
