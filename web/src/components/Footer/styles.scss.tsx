// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  background: ${theme.colors.secondary};
  color: ${theme.colors.background};
  padding: ${theme.space[5]};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }
`

export const Nav = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};
  width: 100%;

  @media ${theme.mq.desktop} {
    width: 55%;
  }

  a {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.heading};
    font-weight: 400;
    font-size: calc(${theme.fontSizes[2]} * 1.25);
    letter-spacing: 0.5px;
    text-transform: uppercase;

    position: relative;
    transition: ${theme.transition.all};

    @media ${theme.mq.tablet} {
    }

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`

export const Social = styled(Flex)`
  a {
    margin-left: ${theme.space[3]};

    &:first-child {
      margin-left: 0;
    }

    svg {
      fill: ${theme.colors.white};
    }

    &:hover {
      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
`

export const Legal = styled(Box)`
  margin: 0;

  a {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.heading};
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    
    padding-left: ${theme.space[2]};
    margin-left: ${theme.space[2]};

    @media ${theme.mq.tablet} {
    }

    &:first-child {
      border-left: none;
      padding-left: 0;
      margin-left: 0;
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`

export const Row = styled(Flex)`
  flex-wrap: wrap;
  margin-top: ${theme.space[5]};
  width: 100%;

  @media ${theme.mq.tablet} {
    margin-top: ${theme.space[8]};
  }
`
