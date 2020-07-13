// Blog Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Card = styled(Flex)<{ border?: boolean }>`
  flex-direction: column;
  /* background: ${theme.colors.white}; */
  border: ${p => (!p.border ? 'none' : `2px solid ${theme.colors.black}`)};

  @media ${theme.mq.tablet} {
  }

  .card {
    &__image {
      max-height: 333px;
      overflow: hidden;
      width: 70%;
      padding:  ${theme.space[5]} 0 0 ${theme.space[5]};
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding:  ${theme.space[5]};

      @media ${theme.mq.tablet} {
      }

      h3 {
        font-size: calc(${theme.fontSizes[1]} * 1.75);
        font-weight: 500;
      }

      p {
        font-size: calc(${theme.fontSizes[1]} / 1);
      }

      .card__meta {
        display: flex;
        justify-content: space-between;
        margin-top: ${theme.space[5]};
        
        font-size: calc(${theme.fontSizes[1]} / 1.15);
        font-family: ${theme.fonts.code};

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
  /* flex-wrap: wrap;
  justify-content: space-between; */
  margin: 0 auto;
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
          /* background: ${theme.colors.primary}; */
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
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }

  div {
    margin-top: ${theme.space[5]};
    width: 100%;

    &:first-child {
      margin-top: 0;
    }
  }
`
