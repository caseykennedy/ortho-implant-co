// Header Styles:

import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '@/components/elements'

export const Header = styled(Flex)`
  flex-flow: row wrap;
  position: relative;
  z-index: 99;

  background: ${theme.colors.background};

  @media ${theme.mq.tablet} {
    flex-flow: row nowrap;
  }
`

export const Logo = styled(Box)`
  background: ${theme.colors.primary};
  width: calc(${theme.logoWidth} / 1.75);
  height: calc(${theme.headerHeight} / 1.5);
  padding: calc(${theme.space[3]} * 1) ${theme.space[4]} ${theme.space[3]};

  /* border-bottom: 4px solid ${theme.colors.primary}; */

  @media (min-width: 900px) {
    display: flex;
  }

  @media ${theme.mq.tablet} {
    font-size: 1.4rem;
    width: ${theme.logoWidth};
    height: ${theme.headerHeight};
    padding: calc(${theme.space[3]} * 3) ${theme.space[4]} ${theme.space[3]};
  }

  &.logo--dark {
    background: ${theme.colors.secondary};

    svg {
      fill: ${theme.colors.white};
    }
  }

  svg {
    fill: ${theme.colors.secondary};
    width: 100%;
    max-width: calc(${theme.space[3]} * 6);
    min-width: calc(${theme.space[3]} * 4);
  }
`

export const Tools = styled(Flex)`
  justify-content: space-between;
  flex: 1;
  border-left: ${theme.border};
`

const showNav = `(min-width: 1024px)`

export const Nav = styled(Flex)`
  flex: 1;
  display: none;
  justify-content: flex-end;

  @media ${showNav} {
    display: flex;
  }

  .cta {
    /* display: none; */

    @media ${theme.mq.desktop} {
      display: initial;
    }
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  margin-left: auto;
  padding: ${theme.space[4]};

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${showNav} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`

export const Cta = styled(Box)`
  display: none;

  @media ${theme.mq.tablet} {
    display: initial;
  }
`
