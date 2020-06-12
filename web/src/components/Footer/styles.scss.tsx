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
    color: ${theme.colors.white};
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

  .t--link {
    h4 {
      display: flex;
      margin: ${theme.space[5]} 0;
    }

    &:hover {

      span {
        margin-left: calc(${theme.space[5]} * 1.5);
      }
    }

    span {
      margin-left: ${theme.space[5]};
      transition: ${theme.transition.all};

      svg {
        width: 24px;
        fill: ${theme.colors.primary};
      }
    }
  }
`
