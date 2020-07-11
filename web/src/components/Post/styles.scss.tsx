// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Post = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const Article = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  background: ${theme.colors.background};

  @media ${theme.mq.tablet} {
  }

  .article {
    &__img {
      border-bottom: ${theme.border};
    }
  }
`
