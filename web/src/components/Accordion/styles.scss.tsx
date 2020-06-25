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

export const AccordionContainer = styled.div<{ borderColor: string }>`
  width: 100%;
  position: relative;
  border-top: 2px solid ${p => p.borderColor};

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
  justify-content: space-between;
  background: ${p => p.bg};
  color: ${p => p.color};
  cursor: pointer;

  border: none;
  outline: none;
  transition: background-color 0.6s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &.active  {
    color: ${p => p.colorActive};
    background: ${theme.colors.white};
  }
`

export const AccordionToggleInner = styled(Flex)`
  flex-direction: column;

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }

  h3 {
    line-height: 0.6;
    text-transform: uppercase;
    margin-bottom: ${theme.space[3]};

    @media ${theme.mq.desktop} {
      margin-bottom: 0;
    }
  }
`

export const AccordionContent = styled(Box)`
  overflow: hidden;
  transition: max-height 0.3s ease;
`

export const Carat = styled(Icon)<{ chevronColor: string }>`
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
