// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const HomePage = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  border-left: none;

  @media ${theme.mq.small} {
  }
`

export const WelcomeBox = styled(Box)`
  background: ${theme.colors.secondary};
  border-right: ${theme.border};
  padding: ${theme.space[4]};
`

export const ImageBox = styled(Flex)`
  justify-content: stretch;
  border-right: ${theme.border};

  &.border {
    &--top {
      border-top: ${theme.border};
    }
  }
`

export const BulletinBox = styled(Flex)`
  background: ${theme.colors.black};
  padding: ${theme.space[4]};
`

export const IntroBox = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  padding: ${theme.space[4]};
  background: ${theme.colors.background};
  border-top: ${theme.border};
`
