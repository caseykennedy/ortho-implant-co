// BlogPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const BlogPage = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: ${theme.colors.text};
    background: ${theme.colors.white};
    height: 100%;

    &:hover {
      background: ${theme.colors.primary};
    }
  }

  .grid__cell {
    border-right: ${theme.border};
    border-bottom: ${theme.border};

    &:nth-child(even) {
      border-right: none;
    }

    &:last-child {
      border-bottom: none;
    }

    &--news {
      background: ${theme.colors.primary};
    }
  }
`

export const Card = styled(Flex)`
  flex-direction: column;
  /* background: ${theme.colors.white}; */
  border-right: ${theme.border};
  border-bottom: ${theme.border};

  &:nth-child(3n) {
    border-right: none;
  }

  &:hover {
    .card__img {
      /* mix-blend-mode: normal; */
    }
  }

  @media ${theme.mq.tablet} {
  }

  .card {
    &__img {
      max-height: 200px;
      height: 200px;
      overflow: hidden;
      width: 75%;
      padding:  ${theme.space[5]} 0 0 ${theme.space[5]};
      mix-blend-mode: luminosity;
      transition: ${theme.transition.all};
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding:  ${theme.space[5]};
      background: transparent;

      @media ${theme.mq.tablet} {
      }

      h3 {
        font-size: ${theme.fontSizes[3]};
        font-weight: 400;
        /* text-transform: uppercase; */
        margin-top: ${theme.space[7]};
        margin-bottom: ${theme.space[5]};
      }

      .lead {
        font-size: calc(${theme.fontSizes[1]} * 1.5);
      }

      p {
        /* font-size: calc(${theme.fontSizes[1]} * 1); */
      }

      
      
    }
  }

  .card__meta {
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.space[5]};
    padding:  0 ${theme.space[5]} ${theme.space[5]};
    
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
