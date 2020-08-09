// Implants Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../Section'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

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

  background: ${theme.colors.primary};

  color: ${theme.colors.text};
  text-transform: uppercase;

  transition: ${theme.transition.all};

  &:hover {
    background: ${theme.colors.tertiary};

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
        width: 24px;
        /* fill: ${theme.colors.text}; */
      }
    }
  }
`

export const Decorator = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${theme.colors.primary};
  opacity: 0.35;

  .img {
    img {
      mix-blend-mode: luminosity;
    }
  }
`
