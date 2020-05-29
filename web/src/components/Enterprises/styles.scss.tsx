// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Enterprises = styled(Flex)`
  background: ${theme.colors.background};
  flex-wrap: wrap;
  width: 100%;
`

export const Banner = styled(Box)`
  min-height: 300px;
`

export const Card = styled(Flex)`
  justify-content: stretch;
  position: relative;
  border-right: none;
  border-bottom: ${theme.border};

  @media ${theme.mq.small} {
    border-right: ${theme.border};
    border-bottom: none;
  }

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    padding: 0;
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

  &.mountain-sky {
    border-left: none;
    border-right: none;
    border-top: ${theme.border};

    @media ${theme.mq.small} {
      border-left: ${theme.border};
    }
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${theme.space[4]};

    border-top: ${theme.border};
    color: ${theme.colors.primary};
    text-transform: uppercase;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.text};

      .ico {
        background: ${theme.colors.black};

        svg {
          fill: ${theme.colors.primary};
        }
      }
    }

    .ico {
      background: ${theme.colors.primary};
      border-left: ${theme.border};
      padding: ${theme.space[4]};
      display: block;

      transition: ${theme.transition.all};

      @media ${theme.mq.small} {
        padding: ${theme.space[4]};
      }

      svg {
        fill: ${theme.colors.black};
        width: ${theme.space[5]};
      }
    }
  }
`
