// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { AnimatedBox, Flex } from '../../../elements'

// ___________________________________________________________________

export const Rethink = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const Notion = styled(AnimatedBox)`
  .image {
    background: ${theme.colors.tertiary};
    border-top: ${theme.border};
  }
`
