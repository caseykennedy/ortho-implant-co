// Rethink Styles:

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { AnimatedBox, Flex } from '@/components/elements'

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
