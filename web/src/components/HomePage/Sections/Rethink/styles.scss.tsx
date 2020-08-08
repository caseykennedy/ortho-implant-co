// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Rethink = styled(Flex)`
  flex-wrap: wrap;

  .rethink {
    &__message {

      border-top: ${theme.border};
      padding: ${theme.space[5]};

      position: sticky;
      top: 0;

      @media ${theme.mq.tablet} {
        border-right: ${theme.border};
        padding: ${theme.space[7]};
      }
    }

    &__values {
    }
  }

  .sticky {
    position: sticky;
    top: ${theme.space[7]};
  }
`

export const Learn = styled(Box)`
  div {
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

export const Tab = styled(Box)<{ active?: any }>`
  border-top: ${theme.border};
  cursor: pointer;
  display: block;
  /* opacity: 0.5; */
  padding: ${theme.space[5]};

  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }

  &:hover {
    opacity: 1;
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: ${theme.space[8]};
  }

  h4 {
    font-size: calc(${theme.fontSizes[2]} * 1.5);
    margin-bottom: ${theme.space[8]};
  }

  
`

export const ButtonGroup = styled(Box)``
