// Button Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import { lighten } from 'polished'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Button = styled(Link)<{ invert?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 300px;
  padding: calc(${theme.space[5]}) ${theme.space[3]} ${theme.space[3]};

  color: ${p => p.invert ? theme.colors.white : theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: uppercase;

  background: ${p => p.invert ? theme.colors.black : theme.colors.primary};
  transition: ${theme.transition.all};

  &:hover {
    background: ${theme.colors.black};
    color: ${theme.colors.white};

    span {
      margin-right: 0;

      svg {
        fill: ${theme.colors.white};
      }
    }
  }

  span {
    margin-right: ${theme.space[3]};
    transition: ${theme.transition.all};

    svg {
      width: 24px;
      fill: ${p => p.invert ? theme.colors.white : theme.colors.black};
    }
  }
`
