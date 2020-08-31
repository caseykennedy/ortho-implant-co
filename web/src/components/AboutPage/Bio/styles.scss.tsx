// Bio Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex, AnimatedBox } from '../../../elements'

// ___________________________________________________________________

export const Bio = styled(Flex)`
  flex-wrap: wrap;
  padding-bottom: ${theme.space[7]};

  @media ${theme.mq.tablet} {
    max-width: calc(${theme.maxWidth} / 1.5);
  }

  .bio {
    &__figure {
      @media ${theme.mq.tablet} {
        position: sticky;
        top: 0;
      }
    }
  }
`

export const Social = styled(Flex)`
  margin-top: ${theme.space[5]};

  a {
    margin-left: ${theme.space[3]};

    &:first-child {
      margin-left: 0;
    }

    svg {
      fill: ${theme.colors.tertiary};
    }

    &:hover {
      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
`
