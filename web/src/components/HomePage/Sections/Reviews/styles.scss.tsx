// Reviews Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

const pixelHeight = '200px'

export const Decorator = styled(Flex)`
  justify-content: flex-end;
  overflow: visible;
  position: relative;
  z-index: 99;

  .pixels {
    display: flex;
    justify-content: flex-end;
  }

  svg {
    height: calc(${pixelHeight} / 2.5);
      margin-bottom: calc(${pixelHeight} / -2.5);

    @media ${theme.mq.tablet} {
      height: calc(${pixelHeight} / 1.2);
      margin-bottom: calc(${pixelHeight} / -1.2);
    }

    @media ${theme.mq.desktop} {
      height: ${pixelHeight};
      margin-bottom: -${pixelHeight};
    }
  }
`