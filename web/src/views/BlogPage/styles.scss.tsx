// BlogPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '@/components/elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const BlogPage = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.background};
  position: relative;
  width: 100%;
  z-index: 9;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: ${theme.colors.text};
    background: ${theme.colors.white};
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

export const Featured = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
    flex-direction: row-reverse;
  }

  .card__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.space[3]} 0;
    width: 100%;

    font-size: calc(${theme.fontSizes[1]} / 1.15);
    font-family: ${theme.fonts.code};

    span {
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
      }
    }
  }
`

export const NewsBox = styled(Flex)`
  flex-wrap: wrap;
  justify-content: stretch;
`

export const Card = styled(Flex)<{ border?: boolean }>`
  flex-wrap: wrap;
  justify-content: stretch;
  max-height: 800px;

  border-bottom: ${p =>
    !p.border ? 'none' : `2px solid ${theme.colors.black}`};

  .card {
    &__img {
      max-height: 200px;
      height: 200px;
      overflow: hidden;
      width: 75%;
      padding: ${theme.space[5]} 0 0 ${theme.space[5]};
      transition: ${theme.transition.all};

      &--small {
        max-height: 40px;
        img {
          max-height: 40px;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: ${theme.space[5]};
      background: transparent;
      width: 100%;

      @media ${theme.mq.tablet} {
      }

      h3 {
        font-size: ${theme.fontSizes[3]};
        font-weight: 400;
        margin-top: ${theme.space[7]};
        margin-bottom: ${theme.space[5]};
      }

      .lead {
        font-size: calc(${theme.fontSizes[1]} * 1.5);
      }

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }

  .card__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.space[5]};
    padding: 0 ${theme.space[5]} ${theme.space[5]};
    width: 100%;

    font-size: calc(${theme.fontSizes[1]} / 1.15);
    font-family: ${theme.fonts.code};

    span {
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
      }
    }
  }
`

export const CardHolder = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;

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
          cursor: pointer;
        }
      }
    }

    .swiper-pagination {
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

export const CardColumn = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: stretch;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }

  a {
    width: 100%;

    .card {
      &:last-child {
        border-right: none;
      }

      &:last-child {
        background: ${theme.colors.quinary};
      }
    }
  }
`
