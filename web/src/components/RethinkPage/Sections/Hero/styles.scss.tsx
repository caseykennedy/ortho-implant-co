// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.secondary};
  position: absolute;
  width: 100%;
  /* height: calc(20vh - ${theme.headerHeight}); */
  min-height: calc(${theme.space[3]} * 15);

  @media ${theme.mq.tablet} {
    /* height: calc(30vh - ${theme.headerHeight}); */
  }
`

export const Sideboard = styled(Box)`
  color: ${theme.colors.text};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  display: none;

  @media ${theme.mq.tablet} {
    display: block;
  }
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
  /* margin-top: -${theme.space[2]}; */
  position: relative;
  width: 100%;

  @media ${theme.mq.tablet} {
    /* margin-top: -${theme.space[11]}; */
  }
`