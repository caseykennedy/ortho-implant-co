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
      width: 75%;
      /* padding:  ${theme.space[3]} 0 0 ${theme.space[3]}; */
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding:  ${theme.space[5]};

      @media ${theme.mq.tablet} {
      }

      h3 {
        font-size: calc(${theme.fontSizes[1]} * 2);
        font-weight: 400;
        /* text-transform: uppercase; */
        margin-top: ${theme.space[7]};
        margin-bottom: ${theme.space[5]};
      }

      .lead {
        font-size: calc(${theme.fontSizes[1]} * 1.5);
      }

      p {
        font-size: calc(${theme.fontSizes[1]} * 1);
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

export const CardHolder = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  a {
    color: ${theme.colors.text};

    &.card--highlight {
      &:first-child {
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
      }
    }
  }

  .swiper-container {
    overflow: visible;

    @media ${theme.mq.tablet} {
      overflow: hidden;
    }

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};
        
        height: auto; /* For equal slide height */

        &:hover {
          /* background: ${theme.colors.primary}; */
          cursor: pointer;
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }
    }

    .swiper-pagination {
      /* background: ${theme.colors.primary}; */
      /* top: -3rem; */
      /* bottom: initial; */

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
  }Î

`

export const CardColumn = styled(Flex)`
  flex-direction: column;
  /* justify-content: space-between; */
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
