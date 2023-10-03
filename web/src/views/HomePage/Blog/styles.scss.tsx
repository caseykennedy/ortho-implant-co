// Blog Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '@/components/elements'

// ___________________________________________________________________

export const Blog = styled.div`
  display: none;
  flex-direction: column;
  background: ${theme.colors.white};
  color: ${theme.colors.text};

  @media ${theme.mq.tablet} {
    display: flex;
  }
`

export const Card = styled(Flex)<{ border?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  /* background: ${theme.colors.white}; */
  border-top: ${p => (!p.border ? 'none' : `2px solid ${theme.colors.black}`)};
  border-right: ${p =>
    !p.border ? 'none' : `2px solid ${theme.colors.black}`};

  .card {
    &__img {
      background: ${theme.colors.quinary};
      overflow: hidden;
      padding:  ${theme.space[5]};
      /* mix-blend-mode: luminosity; */
      transition: ${theme.transition.all};
    }

    &__content {
      display: flex;
      flex-direction: column;
      padding:  ${theme.space[5]};
      background: transparent;
      width: 100%;

      @media ${theme.mq.tablet} {
      }

      h3 {
        font-size: calc(${theme.fontSizes[3]} / 1.25);
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 0;
      }

      .lead {
        font-size: calc(${theme.fontSizes[1]} * 1.5);
      }

      p {
        /* font-size: calc(${theme.fontSizes[1]} * 1); */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }

  .card__meta {
    max-height: 60px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    padding:  0 ${theme.space[5]} ${theme.space[5]};
    width: 100%;
    
    font-size: calc(${theme.fontSizes[1]} / 1.15);
    font-family: ${theme.fonts.code};

    span {
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
        fill: ${theme.colors.text};
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

  a {
    display: flex;
    /* justify-content: stretch; */
    color: ${theme.colors.text};

    &:first-child {
      &.card--highlight {
        /* background: ${theme.colors.primary}; */
        color: ${theme.colors.text};
      }
    }

    &:last-child {
      /* background: ${theme.colors.secondary}; */
      /* color: ${theme.colors.white}; */

      svg {
        /* fill: ${theme.colors.white}; */
      }
    }

    svg {
      transition: ${theme.transition.all};
    }

    &:hover {
      background: ${theme.colors.quinary};

      svg {
        position: relative;
        margin-right: -1rem;
        transition: ${theme.transition.all};
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
      /* padding-bottom: 2px; */

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
    
    &:first-child {
      &.card--highlight div {
        /* background: ${theme.colors.quinary}; */
        /* color: ${theme.colors.white}; */
      }
    }

    .card {
      &:last-child {
        border-right: none;
      }
    
      &:last-child {
        background: ${theme.colors.primary};

        svg {
        }
      }
    }
  }

  /* div {
    margin-top: ${theme.space[5]};
    width: 100%;

    &:first-child {
      margin-top: 0;
    }
  } */
`
