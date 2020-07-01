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

  @media ${theme.mq.tablet} {
    position: ${p => (!p.image ? 'relative' : 'absolute')};
  }
`

export const Sideboard = styled(Box)<{ border?: boolean }>`
  color: ${theme.colors.text};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  background: ${theme.colors.white};
  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  display: none;

  ${p => p.border && `border-right: ${theme.border};`}

  @media ${theme.mq.desktop} {
    display: block;
  }
`

export const Billboard = styled(Flex)<{ border?: boolean }>`
  align-items: flex-end;
  flex: 1;
  ${p => p.border && `border-bottom: ${theme.border};`}

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
  background: ${theme.colors.tertiary};

  @media ${theme.mq.tablet} {
    /* margin-top: ${theme.space[5]}; */
  }

  img {
    mix-blend-mode: hard-light;
    /* margin-top: ${theme.space[7]}; */
  }
`
