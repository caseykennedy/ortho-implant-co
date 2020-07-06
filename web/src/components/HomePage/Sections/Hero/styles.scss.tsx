// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.quinary};
  position: relative;
  width: 100%;
  /* height: calc(20vh - ${theme.headerHeight}); */
  min-height: 222px;

  @media ${theme.mq.tablet} {
    height: calc(57vh - ${theme.headerHeight});
  }
`

export const Sideboard = styled(Box)`
  color: ${theme.colors.tertiary};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  background: ${theme.colors.secondary};
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
  border-bottom: ${theme.border};
  border-left: ${theme.border};
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
    margin-top: -${theme.space[7]};
  }
`
