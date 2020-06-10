// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.secondary};
  position: relative;
  width: 100%;
  height: calc(70vh - ${theme.headerHeight});
  min-height: calc(${theme.space[3]} * 24);
`

export const Sideboard = styled(Box)`
  color: ${theme.colors.tertiary};
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
`

export const Billboard = styled(Flex)`
  align-items: flex-end;
  flex: 1;

  background: ${theme.colors.background};
  padding: ${theme.space[5]} ${theme.space[5]} ${theme.space[3]};
  position: relative;
  z-index: 9;

  h1 {
    text-transform: uppercase;
  }
`

export const Figure = styled(Box)`
  position: relative;
  margin-top: -${theme.space[8]};
  width: 100%;
`
