// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// ___________________________________________________________________

export const Header = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100vw;

  @media ${theme.mq.tablet} {
  }
`

export const Logo = styled(Box)`
  background: ${theme.colors.secondary};
  width: calc(${theme.logoWidth} / 1.5);
  height: calc(${theme.headerHeight} / 1.5);
  padding: calc(${theme.space[3]} * 3) ${theme.space[5]} ${theme.space[3]};

  /* border-bottom: 4px solid ${theme.colors.primary}; */

  @media (min-width: 400px) {
    display: flex;
  }

  @media ${theme.mq.tablet} {
    font-size: 1.4rem;
    width: ${theme.logoWidth};
    height: ${theme.headerHeight};
  padding: calc(${theme.space[3]} * 5) ${theme.space[5]} ${theme.space[3]};
  }

  svg {
    fill: white;
    width: 100%;
    max-width: calc(${theme.space[3]} * 6);
    min-width: calc(${theme.space[3]} * 4);
  }
`

export const Nav = styled(Flex)`
  flex: 1;
  display: none;
  justify-content: flex-end;

  @media ${theme.mq.tablet} {
    display: flex;
  }

  .cta {
    display: none;

    @media ${theme.mq.tablet} {
      display: initial;
    }
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  padding: ${theme.space[5]};

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
