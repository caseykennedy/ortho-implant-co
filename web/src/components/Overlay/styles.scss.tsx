// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex } from '../../elements'

import theme from '../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const overlayWidth = '100%'

export const Overlay = styled(Box)`
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

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }

  &.nav-bg--open {
    visibility: visible;
    opacity: 1;
  }
`

export const Exit = styled(Box)`
  position: fixed;
  top: ${theme.space[5]};
  right: ${theme.space[5]};
  cursor: pointer;

  @media ${theme.mq.tablet} {
  }
`