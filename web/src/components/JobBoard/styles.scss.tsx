// JobBoard Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../../config/theme'
import { Box, Flex } from '../../elements'

// ___________________________________________________________________

export const JobBoard = styled(Flex)`
  background: ${theme.colors.tertiary};
  border-top: ${theme.border};

  img {
    mix-blend-mode: luminosity;
  }

  .posts {
    padding: ${theme.space[2]} 0 ${theme.space[2]} ${theme.space[5]};
    border-left: 8px solid black;

    a {
      color: ${theme.colors.text};
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes[2]};
      font-weight: 500;
      text-transform: uppercase;

      display: block;
      margin: ${theme.space[4]} 0;

      span svg {
        fill: ${theme.colors.black};
      }

      &:hover {
        color: ${theme.colors.white};

        span svg {
          fill: ${theme.colors.white};
        }
      }
    }
  }
`
