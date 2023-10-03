// Approach Styles:

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '@/components/elements'

export const Approach = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  top: -1rem;

  @media ${theme.mq.tablet} {
    margin-top: 0;
    top: -6rem;
  }

  @media ${theme.mq.desktop} {
    top: -1rem;
  }

  figure {
    display: none;

    @media ${theme.mq.tablet} {
      display: initial;
    }
  }
`
