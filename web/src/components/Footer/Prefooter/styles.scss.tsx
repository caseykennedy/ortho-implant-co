// Prefooter Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

// ___________________________________________________________________

export const Prefooter = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.secondary};
  border-top: ${theme.border};
  position: relative;
  width: 100%;
  /* min-height: calc(${theme.space[3]} * 24); */

  @media ${theme.mq.tablet} {
    
  }
`

export const Sideboard = styled(Flex)`
  color: ${theme.colors.tertiary};
  writing-mode: vertical-lr;
  text-orientation: mixed;

  align-items: flex-start;

  display: none;
  padding: ${theme.space[7]};
  width: calc(${theme.logoWidth} * 1);

  @media ${theme.mq.tablet} {
    display: Flex;
    width: calc(${theme.logoWidth} * 1);
  }

  @media ${theme.mq.desktop} {
    width: calc(${theme.logoWidth} * 2);
  }

  svg {
    fill: ${theme.colors.white};
    width: 100%;
    max-width: calc(${theme.space[3]} * 6);
    min-width: calc(${theme.space[3]} * 4);
    padding-bottom: ${theme.space[7]};
  }
`

export const Billboard = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  background: ${theme.colors.tertiary};
  padding: ${theme.space[5]} ${theme.space[5]} ${theme.space[3]};
  position: relative;
  z-index: 9;

  h2 {
    font-weight: 500;
    text-transform: uppercase;
  }

  .cta {
    position: absolute;
    top: 0;
    right: ${theme.space[5]};

    @media ${theme.mq.tablet} {
      right: ${theme.space[7]};
    }
  }
`

export const Figure = styled(Box)`
  margin-top: 0;
  position: relative;
  width: 100%;

  @media ${theme.mq.tablet} {
    margin-top: -${theme.space[8]};
  }
`
