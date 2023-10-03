// Category Detail Page Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const CategoryDetail = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const Details = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`

export const Resources = styled(Flex)`
  flex-direction: column;
  padding: ${theme.space[5]};

  background: ${theme.colors.quinary};
  border-top: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }
`
