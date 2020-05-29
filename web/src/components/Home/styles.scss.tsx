// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const HomePage = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  border-left: none;

  @media ${theme.mq.small} {
  }
`

export const WelcomeBox = styled(Flex)`
  position: relative;
  background: ${theme.colors.secondary};
  border-right: none;

  @media ${theme.mq.small} {
    border-right: ${theme.border};
  }

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: ${theme.space[4]};
    position: relative;
    z-index: 9;
  }

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.background};
    }
  }
`

export const ImageBox = styled(Flex)`
  justify-content: stretch;
  border-top: ${theme.border};
  border-right: ${theme.border};
  border-bottom: ${theme.border};

  

  @media ${theme.mq.small} {
    border-top: none;
    border-bottom: none;
  }

  &.border {
    &--top {
      border-top: ${theme.border};
    }
  }
`

export const BulletinBoard = styled(Flex)`
  background: ${theme.colors.black};
`

export const IntroBox = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.background};
  border-top: ${theme.border};

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${theme.space[4]};

    border-top: ${theme.border};
    color: ${theme.colors.text};
    text-transform: uppercase;

    &:hover {
      background: ${theme.colors.primary};
    }

    .ico {
      background: ${theme.colors.black};
      padding: ${theme.space[3]};
      display: block;

      @media ${theme.mq.small} {
        padding: ${theme.space[4]};
      }

      svg {
        fill: white;
        width: ${theme.space[5]};
      }
    }
  }
`
