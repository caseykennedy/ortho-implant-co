// PageTitle Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'
import { Box, Flex } from '../../elements'

// ___________________________________________________________________

export const PageTitle = styled(Flex)<{ image?: object }>`
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  /* height: calc(20vh - ${theme.headerHeight}); */
  min-height: calc(${theme.space[3]} * 15);
  background: ${theme.colors.secondary};

  @media ${theme.mq.desktop} {
    padding-left: ${theme.logoWidth};
    position: ${p => (!p.image ? 'relative' : 'absolute')};
  }
`

export const Sideboard = styled(Box)<{ border?: boolean }>`
  color: ${theme.colors.text};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  background: ${theme.colors.black};
  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  display: none;

  @media ${theme.mq.desktop} {
    display: block;
  }
`

export const Billboard = styled(Flex)<{ border?: boolean }>`
  align-items: flex-end;
  flex: 1;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  border-left: none;
  padding: ${theme.space[5]} ${theme.space[5]} ${theme.space[3]};
  position: relative;
  z-index: 9;

  @media ${theme.mq.desktop} {
    border-left: ${theme.border};
  }

  h1 {
    text-transform: uppercase;
  }
`

export const Figure = styled(Box)`
  position: relative;
  width: 100%;
  background: ${theme.colors.tertiary};

  @media ${theme.mq.tablet} {
  }

  img {
    mix-blend-mode: hard-light;
  }
`
