// Bio Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex, AnimatedBox } from '../../../elements'

// ___________________________________________________________________

export const Bio = styled(Flex)`
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
    max-width: calc(${theme.maxWidth} / 1.25);
  }
`

export const Social = styled(Flex)`
  margin-top: ${theme.space[7]};
  margin-bottom: ${theme.space[7]};

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

export const Exit = styled(Box)`
  position: absolute;
  top: -${theme.space[3]};
  right: 0;

  @media ${theme.mq.tablet} {
  }
`