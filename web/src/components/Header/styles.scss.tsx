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

export const Header = styled(AnimatedFlex)`
  flex-direction: row;
  position: relative;
  width: 100vw;

  @media ${theme.mq.small} {
  }
`

export const Logo = styled(Box)`
  background: ${theme.colors.primary};
  padding: calc(${theme.space[3]} * 5) ${theme.space[5]} ${theme.space[3]};
  height: ${theme.headerHeight};

  @media (min-width: 400px) {
    display: flex;
  }

  @media ${theme.mq.small} {
    font-size: 1.4rem;
  }

  svg {
    width: 100%;
    max-width: calc(${theme.space[3]} * 6);
    min-width: calc(${theme.space[3]} * 4);
  }
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

  @media ${theme.mq.small} {
    padding: ${theme.space[2]} ${theme.space[4]};
  }

  @media ${theme.mq.medium} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
