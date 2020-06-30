// ImplantsPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const ImplantsPage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  overflow: hidden;

  nav {
    margin-bottom: 1rem;
    a {
      color: ${theme.colors.text};
      margin-right: 1.5rem;
      text-transform: uppercase;
      font-size: ${theme.fontSizes[1]};
    }
  }

  @media ${theme.mq.tablet} {
  }

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
          background: ${theme.colors.secondary} !important;
          padding: ${theme.space[3]};
          border-radius: 0;
        }
      }
    }
  }
`

export const Spacer = styled(Box)`
  background: ${theme.colors.white};
  
  @media ${theme.mq.desktop} {
    min-width: ${theme.logoWidth};
  }
`

export const Decorator = styled(Flex)`

  svg {
    width: 900px;
  }
`