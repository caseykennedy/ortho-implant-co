// Project Slider styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Components

// Elements
import { AnimatedBox, Flex } from '../../../elements'

// Theme
import theme from '../../../../config/theme'
import { Rotate } from '../../../styles/transitions'

// ___________________________________________________________________

export const Callout = styled(AnimatedBox)`
  position: relative;
  width: 100%;

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.tertiary};
    }
  }
`

export const Inner = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: ${theme.colors.text};

  h3 {
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSizes[5]};
    padding: ${theme.space[4]} ${theme.space[4]} 0 ${theme.space[4]};
    margin-bottom: 0;
  }

  p {
    padding: 0 ${theme.space[4]} ${theme.space[4]} ${theme.space[4]};
  }

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
