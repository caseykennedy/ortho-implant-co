// RethinkPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const ProductPage = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${theme.space[7]} 0 0;

    li {
      list-style: none;
      margin-bottom: ${theme.space[7]};
      width: 46%;
      color: ${theme.colors.quinary};
    }
  }
`

export const AdditionalInfo = styled(Flex)`
  flex-direction: column;
  padding: ${theme.space[5]};

  background: ${theme.colors.quinary};
  border-top: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }
`
