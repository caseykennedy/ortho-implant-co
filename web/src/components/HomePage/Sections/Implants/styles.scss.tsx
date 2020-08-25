// Implants Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../Section'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Categories = styled(Box)`
  a {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[3]};
    display: block;

    /* &::before {
      position: absolute;
      content: '';
      background: ${theme.colors.primary};
      width: 0;
      height: 100%;
      bottom: 0;
      left: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    } */

    &.active,
    &:hover {
      color: ${theme.colors.primary};

      /* &::before {
        width: 100%;
      } */
    }
  }

  .tip {
    color: white;
    font-size: 3rem;

    position: absolute;
    padding-left: ${theme.space[7]};
    top: 0;
    right: ${theme.space[7]};

    pointer-events: none;
    z-index: 99999;

    visibility: hidden;
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, -32);
    transition: ${theme.transition.all};

    /* mix-blend-mode: lighten; */

    /* box-shadow: ${theme.space[10]} ${theme.space[7]} ${theme.space[10]} black; */

    &--visible {
      visibility: visible;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
`

export const Carousel = styled(Box)`
  padding-top: ${theme.space[7]};
  padding-left: ${theme.space[5]};
  overflow: hidden;
  width: 100%;

  @media ${theme.mq.tablet} {
    padding-left: ${theme.space[7]};
  }

  .swiper-container {
    overflow: visible;
    position: relative;

    .parallax-bg {
      background: yellow;
    }

    .swiper-wrapper {
      .swiper-slide {
        /* background: ${theme.colors.tertiary}; */
        transition: ${theme.transition.all};

        &:hover {
          background: ${theme.colors.primary};
          cursor: pointer;
        }

        &.swiper-slide-active {
          /* background: ${theme.colors.primary}; */
        }
      }

      &:after {
        content: 'drag';
        position: relative;
        right: 0;
      }
    }

    .swiper-pagination {
      /* background: ${theme.colors.primary}; */
      top: -${theme.space[7]};
      /* left: ${theme.space[5]}; */
      bottom: initial;

      text-align: left;

      &.swiper-pagination-bullets {
        span {
          cursor: pointer;
          background: ${theme.colors.white} !important;
          padding: ${theme.space[3]};
          border-radius: 0;
        }
      }
    }
  }
`

export const Card = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.white};

  color: ${theme.colors.text};
  text-transform: uppercase;

  transition: ${theme.transition.all};

  &:hover {
    background: ${theme.colors.primary};

    img {
      mix-blend-mode: normal;
    }
  }

  .card {
    &__img {
      width: 80%;
      padding:  ${theme.space[5]} 0 0 ${theme.space[5]};
      /* mix-blend-mode: luminosity; */
      transition: ${theme.transition.all};

      img {
        mix-blend-mode: luminosity;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding:  ${theme.space[5]};
      background: transparent;
      width: 75%;
      min-height: calc(${theme.space[3]} * 14);

      @media ${theme.mq.tablet} {
      }

      h3 {
        font-size: ${theme.fontSizes[3]};
        /* font-weight: 400; */
        /* text-transform: uppercase; */
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
    align-items: center;
    margin-top: ${theme.space[5]};
    padding:  0 ${theme.space[5]} ${theme.space[5]};
    width: 100%;
    
    font-size: calc(${theme.fontSizes[1]} / 1.15);
    font-family: ${theme.fonts.code};

    span {
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
        /* fill: ${theme.colors.text}; */
      }
    }
  }
`

export const Decorator = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  opacity: 0.5;
  height: 100%;
  z-index: 0;

  @media ${theme.mq.tablet} {
    width: 50%;
  }

  /* .img {
    img {
      mix-blend-mode: luminosity;
    }
  } */
`
