// Accordion Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { darken } from 'polished'

import Icon from '../Icons'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-top: 2px solid ${theme.colors.quinary};

  /* &:first-child {
    border-top: none;
  } */
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;

  .rotate {
    transform: rotate(90deg);
  }
`

export const AccordionToggle = styled(Flex)<{ bg: string, colorActive: string, color: string }>`
  align-items: flex-end;
  background: ${p => p.bg};
  color: ${p => p.color};
  cursor: pointer;

  border: none;
  outline: none;
  padding: ${theme.space[5]};
  transition: background-color 0.6s ease;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &.active  {
    color: ${p => p.colorActive};
    background: ${p => p.bg && darken(.08, p.bg)};
  }

  /* &.active {
    color: ${p => p.colorActive};
  } */

  h3 {
    font-size: ${theme.fontSizes[3]};
    font-weight: 400;
    line-height: 0.8;
    text-transform: uppercase;
    margin-bottom: 0;

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[3]};
    }
  }
`

export const AccordionContent = styled(Box)<{ borderColor: string }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  /* border-bottom: 2px solid ${p => p.borderColor}; */
`

export const Carat = styled(Icon)<{ chevronColor: string }>`
  margin-left: auto;
  margin-right: ${theme.space[2]};
  transition: transform 0.3s ease;

  @media ${theme.mq.tablet} {
    margin-right: ${theme.space[4]};
  }

  svg {
    fill: ${p => p.chevronColor};
    width: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      width: ${theme.space[6]};
    }
  }
`
