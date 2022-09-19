// Purpose Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

// ___________________________________________________________________

export const Purpose = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  .purpose-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: ${theme.space[5]};
    padding-left: ${theme.space[5]};
    position: relative;

    @media ${theme.mq.tablet} {
      padding-right: ${theme.space[10]};
      padding-left: ${theme.space[7]};
    }
  }
`
