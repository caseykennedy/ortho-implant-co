// Staff Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Sidebar = styled(Flex)`
  flex-direction: column;
  position: relative;
  padding: ${theme.space[5]} ${theme.space[4]};
  background: ${theme.colors.background};
  border-top: ${theme.border};

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.bloodshot};
    }
  }
`

export const Inner = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: ${theme.colors.text};

  h3 {
    font-size: ${theme.fontSizes[4]};
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.text};
    font-size: calc(${theme.fontSizes[3]} / 1.2);
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.primary};
    }

    .ico {
      background: ${theme.colors.black};
      padding: ${theme.space[4]};
      display: block;

      svg {
        fill: white;
        width: ${theme.space[5]};
      }
    }
  }
`
