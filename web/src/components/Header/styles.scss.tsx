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
  background: ${theme.colors.primary};
  padding: calc(${theme.space[3]} * 5) ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  height: ${theme.headerHeight};

  @media (min-width: 400px) {
    display: flex;
  }

  @media ${theme.mq.tablet} {
    font-size: 1.4rem;
  }

  svg {
    width: 100%;
    max-width: calc(${theme.space[3]} * 6);
    min-width: calc(${theme.space[3]} * 4);
  }
`

export const Nav = styled(Flex)`
  flex: 1;
`

export const Toggle = styled.div`
  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  height: ${theme.headerHeight};
  padding: 0 ${theme.space[4]};
  border-left: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[2]} ${theme.space[4]};
  }

  @media ${theme.mq.desktop} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
