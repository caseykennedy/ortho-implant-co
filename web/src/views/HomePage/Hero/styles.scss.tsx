// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '@/components/elements'

// ___________________________________________________________________

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${theme.colors.black};
  position: relative;
  width: 100%;
  /* height: calc(20vh - ${theme.headerHeight}); */
  max-height: calc(${theme.space[3]} * 18);
  min-height: calc(${theme.space[3]} * 18);

  @media ${theme.mq.tablet} {
    height: calc(57vh - ${theme.headerHeight});
  }
`

export const Sideboard = styled.div`
  color: ${theme.colors.tertiary};
  writing-mode: vertical-lr;
  text-orientation: mixed;
  text-align: right;

  background: ${theme.colors.secondary};
  margin-top: -${theme.space[5]};
  padding: ${theme.space[5]} ${theme.space[3]};
  width: ${theme.logoWidth};
  height: 95%;
  display: none;

  h5 {
    transform: rotate(180deg);
  }

  @media ${theme.mq.tablet} {
    display: block;
  }
`

export const Billboard = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;

  background: ${theme.colors.background};
  border-bottom: ${theme.border};
  padding: ${theme.space[3]} ${theme.space[3]} ${theme.space[2]};
  position: relative;
  z-index: 9;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[5]} ${theme.space[5]} ${theme.space[3]};
    border-left: ${theme.border};
  }

  h1 {
    font-size: calc(${theme.fontSizes[5]} / 1.5);
    text-transform: uppercase;
    line-height: 1;

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[5]} / 1.25);
    }

    @media ${theme.mq.desktop} {
      margin-top: -${theme.space[7]};
      font-size: calc(${theme.fontSizes[5]} * 1);
    }
  }
`

export const Figure = styled.div`
  /* margin-top: -${theme.space[2]}; */
  position: relative;
  width: 100%;

  @media ${theme.mq.tablet} {
    margin-top: -${theme.space[7]};
  }
`
