// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { AnimatedBox, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Rethink = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
    /* height: calc(30vh - ${theme.headerHeight}); */
  }
`

export const Notion = styled(AnimatedBox)`

  @media ${theme.mq.tablet} {
    /* height: calc(30vh - ${theme.headerHeight}); */
  }

  .content {

  }

  .image {
    background: ${theme.colors.tertiary};
    border-top: ${theme.border};
    /* padding-top: ${theme.space[5]}; */

    img {
      /* mix-blend-mode: luminosity; */
    }
  }
`
