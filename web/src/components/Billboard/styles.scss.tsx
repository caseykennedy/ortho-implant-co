// Billboard Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../../config/theme'
import { Box, Flex } from '../../elements'

// ___________________________________________________________________

export const Billboard = styled(Flex)`
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding-bottom: calc(60px - ${theme.space[5]});
  z-index: 9;

  @media ${theme.mq.desktop} {
    padding-bottom: calc(120px - ${theme.space[5]});
  }

  h3 {
    text-transform: uppercase;
    margin-top: ${theme.space[10]};
    margin-bottom: 0;

    @media ${theme.mq.tablet} {
      margin-top: ${theme.space[12]};
    }

    @media ${theme.mq.desktop} {
      margin-top: ${theme.space[13]};
    }
  }
`

export const Figure = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  mix-blend-mode: luminosity;

  .img {
    height: 100%;
  }
`

export const Illustration = styled(Flex)`
  justify-content: flex-end;
  position: absolute;
  z-index: -0;
  width: 100%;
  height: 100%;
  top: ${theme.space[7]};
  right: -${theme.space[9]};
  bottom: 0;
  /* left: 0; */

  svg {
    width: 900px;
  }
`