// Team Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex, AnimatedFlex, AnimatedBox } from '../../../../elements'

// ___________________________________________________________________

export const Team = styled(Box)``

export const Card = styled(AnimatedFlex)`
  flex-direction: column;
  justify-content: space-between;
  /* max-width: 333px; */
  /* background: ${theme.colors.white}; */
  border: ${theme.border};

  @media ${theme.mq.tablet} {
  }

  .card {
    &__headshot {
      width: 50%;

      img {
        mix-blend-mode: luminosity;
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
        
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        font-family: ${theme.fonts.code};
        color: ${theme.colors.text};

        span {
          transition: ${theme.transition.all};

          svg {
            width: 24px;
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
        height: auto;

        &:hover {
          background: ${theme.colors.primary};
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
