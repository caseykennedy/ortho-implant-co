// Project Slider styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Components

// Elements
import { AnimatedFlex, Box } from '../../elements'

// Theme
import theme from '../../../config/theme'
import { Rotate } from '../../styles/transitions'

// ___________________________________________________________________

export const Announcements = styled(AnimatedFlex)`
  justify-content: stretch;
  position: relative;
  width: 100%;

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.primary};
    }
  }
`

export const Inner = styled(Box)`
  padding: ${theme.space[4]};
  position: relative;
  width: 100%;
  /* z-index: 9; */

  .announcement {
    min-height: 220px;
  }

  .slick-slider {
    .slick-arrow {
      display: block;
      

      &.slick-prev {
        /* top: initial; */
        bottom: 0;
        left: 0;

        svg {
          transform: rotate(-180deg);
          width: ${theme.space[3]};
        }

        @media ${theme.mq.medium} {
        }

        &::before {
          display: none;
        }
      }

      &.slick-next {
        /* top: initial; */
        left: ${theme.space[4]};

        @media ${theme.mq.medium} {
        }

        svg {
          width: ${theme.space[3]};
        }

        &::before {
          display: none;
        }
      }
    }

    .slide__details {
      opacity: 0;
      transform: ${theme.transform.matrix.from};
      transition: ${theme.transition.all};
    }

    .slick-slide {
      position: relative;

      &.slick-current {
        &::after {
          opacity: 0;
          transform: ${theme.transform.matrix.from};
          z-index: -10;
        }

        .slide__details {
          opacity: 1;
          transform: ${theme.transform.matrix.to};
          position: relative;
          z-index: 99999;
        }
      }
    }
  }

  .btn-inner {
  }

  .slick-dots {
    position: relative;
    bottom: 0;
    display: block;
    float: right;
    width: 50%;
    top: -1.6rem;

    li {
      margin: 0 ${theme.space[2]};

      &.slick-active {
        button {
          &:before {
            color: white;
          }
        }
      }

      button {
        &:before {
          color: white;
          font-size: 14px;
        }
      }
    }
  }
`
