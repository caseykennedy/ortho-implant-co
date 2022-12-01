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

export const Sideboard = styled(Box)`
  color: ${theme.colors.tertiary};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  background: ${theme.colors.secondary};
  margin-top: -${theme.space[5]};
  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  display: none;

  h5 {
    transform: rotate(180deg);
  }

  @media ${theme.mq.tablet} {
    display: block;
  }
`

export const Billboard = styled(Flex)<{ border?: boolean }>`
  align-items: flex-end;
  flex: 1;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  border-left: none;

  margin-bottom: ${theme.space[5]};
  padding: ${theme.space[4]} ${theme.space[4]} ${theme.space[2]};
  position: relative;

  z-index: 9;

  @media ${theme.mq.tablet} {
    padding: 0 ${theme.space[10]} ${theme.space[2]}
      ${theme.space[5]};
  }

  @media ${theme.mq.desktop} {
    border-left: ${theme.border};
    margin-bottom: 0;
  }

  h1 {
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`

export const Figure = styled(Box)`
  position: relative;
  width: 100%;
  background: ${theme.colors.tertiary};
  margin-top: -${theme.space[7]};

  @media ${theme.mq.tablet} {
    margin-top: 0;
  }

  img {
    mix-blend-mode: hard-light;
  }
`
