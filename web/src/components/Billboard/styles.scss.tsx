// Billboard Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../../config/theme'
import { Box, Flex } from '@/components/elements'

import BillboardBG from '../../images/bg-billboard.png'

// ___________________________________________________________________

export const Billboard = styled(Section)`
  div {
    .cta {
      border-bottom: 2px solid yellow !important;
    }
  }
`

export const BillboardInner = styled(Flex)<{ color?: string }>`
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding-bottom: calc(100px - ${theme.space[5]});
  z-index: 9;

  @media ${theme.mq.desktop} {
    padding-bottom: calc(120px - ${theme.space[5]});
  }

  a {
    color: ${p => (!p.color ? theme.colors.text : p.color)};

    h3 {
      font-size: calc(${theme.fontSizes[4]} * 1.15);
      font-weight: 500;
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

    h4 {
      display: none;

      @media ${theme.mq.desktop} {
        display: initial;
      }

      mark {
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        padding: ${theme.space[2]} ${theme.space[2]} ${theme.space[1]}
          ${theme.space[2]};
      }
    }
  }
`

export const Figure = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-image: url(${BillboardBG});
  /* mix-blend-mode: luminosity; */

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
