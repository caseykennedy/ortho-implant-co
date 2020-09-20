// Implants Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

import Section from '../../Section'

// ___________________________________________________________________

export const Implants = styled(Section)`
  
`

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
    bottom: 0;
    right: 0;

    @media ${theme.mq.desktop} {

    }

    pointer-events: none;
    z-index: 99999;

    visibility: hidden;
    opacity: 0;
    transform: matrix(1, 0, 0, 1, 0, 32);
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
