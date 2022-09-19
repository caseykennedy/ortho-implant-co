// Team Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '../../../elements'

// ___________________________________________________________________

export const Card = styled(AnimatedFlex)`
  flex-direction: column;
  justify-content: space-between;

  border: ${theme.border};
  cursor: pointer;
  height: 100%;
  transition: ${theme.transition.all};

  &:hover {
    background: ${theme.colors.quinary};

    .card__content {
      h5 {
        color: ${theme.colors.text};
      }

      .card__meta {
        &:after {
          width: 100%;
        }
      }
    }
  }

  .card {
    &__headshot {
      overflow: hidden;

      @media ${theme.mq.tablet} {
      }

      img {
        /* mix-blend-mode: luminosity; */
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding:  ${theme.space[4]};

      h4 {
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 0;
        font-size: calc(${theme.fontSizes[3]} / 1);
      }

      h5 {
        color: ${theme.colors.tertiary};
      }

      .card__meta {
        display: flex;
        justify-content: space-between;
        
        border-top: 1px solid black;
        padding-top: ${theme.space[4]};
        position: relative;
        
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        font-family: ${theme.fonts.code};
        color: ${theme.colors.text};
        text-transform: uppercase;
        
        span {
          z-index: 1;
        }

        &:after {
          background: ${theme.colors.primary};
          content: '';
          width: 0%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          transition: ${theme.transition.all};
        }

        span {
          transition: ${theme.transition.all};

          svg {
            width: ${theme.iconWidth};
            /* fill: ${theme.colors.text}; */
          }
        }
      }
      
    }
  }
`

export const CardHolder = styled(Box)`
  width: 100%;

  .swiper-container {
    overflow: visible;

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};
        
        /* height: auto; */ /* For equal slide height */

        &:hover {
          background: ${theme.colors.quinary};
          cursor: pointer;
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }
  }
`

export const CardColumn = styled(Flex)`
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }
`
