// Button Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import { lighten } from 'polished'

import { Box, Flex, Heading } from '../'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Button = styled(Box)<{ invert?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  padding: calc(${theme.space[5]}) ${theme.space[3]} ${theme.space[3]};

  color: ${p => p.invert ? theme.colors.white : theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: uppercase;

  background: ${p => !p.invert ? theme.colors.primary : theme.colors.secondary};
  border-bottom: ${theme.border};
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    width: 300px;
  }

  &:hover {
    background: ${p => !p.invert ? theme.colors.secondary : theme.colors.quaternary};
    color: ${p => !p.invert ? theme.colors.white : theme.colors.text};

    span {
      margin-right: 0;

      svg {
        fill: ${p => !p.invert ? theme.colors.white : theme.colors.text};
      }
    }
  }

  span {
    margin-right: ${theme.space[3]};
    transition: ${theme.transition.all};

    svg {
      width: 24px;
      fill: ${p => p.invert ? theme.colors.white : theme.colors.secondary};
    }
  }
`
