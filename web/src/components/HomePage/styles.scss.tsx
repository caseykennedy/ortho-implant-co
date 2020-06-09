// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const HomePage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .hero__img {
    position: relative;
    margin-top: -${theme.space[8]};
  }
`

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
