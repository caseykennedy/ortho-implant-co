// Button Styles:

import styled from 'styled-components'

import { Box } from '../'
import theme from '../../../../config/theme'

export const Button = styled(Box)<{ invert?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: calc(${theme.space[7]} * 4);
  padding: calc(${theme.space[5]}) ${theme.space[3]} ${theme.space[3]};

  color: ${p => (p.invert ? theme.colors.white : theme.colors.text)};
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 0.5;
  text-transform: uppercase;

  background: ${p =>
    !p.invert ? theme.colors.primary : theme.colors.secondary};
  border-bottom: ${theme.border};
  border-color: ${p =>
    !p.invert ? theme.colors.primary : theme.colors.secondary};
  transition: ${theme.transition.all};

  @media ${theme.mq.desktop} {
    width: calc(${theme.space[7]} * 4);
  }

  &:hover {
    background: ${p =>
      !p.invert ? theme.colors.secondary : theme.colors.quaternary};
    color: ${p => (!p.invert ? theme.colors.white : theme.colors.text)};

    span {
      margin-right: 0;

      svg {
        fill: ${p => (!p.invert ? theme.colors.white : theme.colors.text)};
      }
    }
  }

  span {
    margin-right: ${theme.space[3]};
    transition: ${theme.transition.all};

    svg {
      width: ${theme.iconWidth};
      fill: ${p => (p.invert ? theme.colors.white : theme.colors.secondary)};
    }
  }
`
