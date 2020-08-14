// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex } from '../../elements'

import theme from '../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const overlayWidth = '100vw'

export const Overlay = styled(Flex)`
  justify-content: flex-start;
  flex-direction: column;

  width: ${overlayWidth};
  height: 100vh;
  overflow: auto;
  padding: ${theme.space[5]};

  position: fixed;
  right: 0;
  bottom: 0;

  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  visibility: hidden;
  opacity: 0;
  transition: all 0.333s ease-in-out;
  z-index: 9999;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
    /* top: calc(77px + ${theme.space[2]}); */
  }

  /* @media ${theme.mq.tablet} {
    width: calc(${overlayWidth} / 2);
    right: calc(-${overlayWidth} / 2);
    border-left: ${theme.border};

    visibility: visible;
    opacity: 1;
  } */

  &.nav-bg--open {
    visibility: visible;
    opacity: 1;
  }
`
