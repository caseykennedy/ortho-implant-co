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
  padding: 0 ${theme.space[5]} ${theme.space[5]};

  @media ${theme.mq.tablet} {
    padding: 0 ${theme.space[7]} ${theme.space[7]};
  }
`

export const Nav = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};
  width: 100%;

  @media ${theme.mq.desktop} {
    flex-direction: row;
    width: 55%;
  }

  a {
    color: ${theme.colors.tertiary};
    font-family: ${theme.fonts.heading};
    font-weight: 400;
    font-size: calc(${theme.fontSizes[2]} * 1.25);
    letter-spacing: 0.5px;
    text-transform: uppercase;

    position: relative;
    margin-top: ${theme.space[3]};
    transition: ${theme.transition.all};

    @media ${theme.mq.tablet} {
      margin-top: 0;
    }

    &:first-child {
      margin-top: 0;
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

export const Legal = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  font-size: ${theme.fontSizes[1]};
  margin-top: ${theme.space[5]};

  @media ${theme.mq.tablet} {
    flex-direction: row;
    margin-top: 0;
  }

  .copyright {
    margin-top: ${theme.space[5]};

    @media ${theme.mq.tablet} {
      margin-top: 0;
    }
  }

  ul {
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

export const Decorator = styled(Flex)`
  justify-content: flex-end;
  overflow: visible;
  position: relative;
  z-index: 99;

  .space {
    flex: 1;
    margin-top: -40px;
    background: ${theme.colors.secondary};

    @media ${theme.mq.tablet} {
      margin-top: -60px;
    }

    @media ${theme.mq.desktop} {
      margin-top: -100px;
    }
  }

  .pixels {
    display: flex;
    justify-content: flex-end;
    /* flex: 1; */
  }

  svg {
    height: 80px;
    margin-top: -40px;
    margin-bottom: -40px;

    @media ${theme.mq.tablet} {
      height: 120px;
      margin-top: -60px;
      margin-bottom: -60px;
    }

    @media ${theme.mq.desktop} {
      height: 200px;
      margin-top: -100px;
      margin-bottom: -100px;
    }
  }

  @media ${theme.mq.tablet} {
  }
`
