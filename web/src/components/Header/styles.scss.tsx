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

export const Headroom = styled(AnimatedFlex)`
  display: block;
  position: sticky;
  top: 0;
`

export const Header = styled(AnimatedFlex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  background: ${theme.colors.background};
  border-top: ${theme.border};
  border-bottom: ${theme.border};

  width: 100vw;
  padding-left: ${theme.space[3]};

  transition: all 0.333s ease-in-out;

  @media ${theme.mq.small} {
    padding-left: ${theme.space[4]};
  }

  a {
    display: flex;
    align-items: center;

    &:hover {
      span {
        background: ${theme.colors.bloodshot};
      }
    }
  }
`

export const Logo = styled(AnimatedFlex)`
  flex-direction: column;
  /* margin: ${theme.space[3]} ${theme.space[3]} ${theme.space[3]} 0; */

  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-size: 1.4rem;
  line-height: 0;
  letter-spacing: 2px;

  display: none;

  @media (min-width: 400px) {
    display: flex;
  }

  @media ${theme.mq.small} {
    font-size: 1.4rem;
  }

  span {
    font-family: ${theme.fonts.body};
    font-size: calc(${theme.fontSizes[1]} / 1.5);
    text-transform: uppercase;
    letter-spacing: 0px;

    margin-top: ${theme.space[4]};
  }
`

export const Symbol = styled(AnimatedFlex)`
  align-items: center;
  justify-content: center;

  width: calc(${theme.headerHeight} / 1.5);
  height: calc(${theme.headerHeight} / 1.5);
  margin-right: ${theme.space[2]};

  background: ${theme.colors.primary};
  border-radius: 50%;
  transition: ${theme.transition.all};

  @media ${theme.mq.small} {
    width: ${theme.headerHeight};
    height: ${theme.headerHeight};
    margin-right: ${theme.space[3]};
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
