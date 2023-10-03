// Mantra Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '@/components/elements'

// ___________________________________________________________________

export const Panel = styled(Flex)`
  flex-wrap: wrap;
  
  position: relative;
  /* margin-top: calc(${theme.space[7]} * -2); */
  background: ${theme.colors.white};  
  z-index: 99;

  .img {
    height: 100%;
  }

  .content {
    border-left: none;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      border-left: ${theme.border};
      border-top: none;
    }
  }
`
