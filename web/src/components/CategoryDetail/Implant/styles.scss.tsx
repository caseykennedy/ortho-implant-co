// Implant Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import Icon from '../../Icons'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Implant = styled(Box)``

export const Resources = styled(Box)`
  h4 {
    mark {
      background-color: ${theme.colors.primary};
      padding: ${theme.space[2]} ${theme.space[2]} ${theme.space[1]} ${theme.space[2]};
    }
  }

  a {
    display: flex;
    align-content: center;
    justify-content: space-between;

    /* background: ${theme.colors.primary}; */
    border-bottom: 1px solid ${theme.colors.tertiary};
    color: ${theme.colors.text};
    padding: calc(${theme.space[4]} + 4px) ${theme.space[3]} ${theme.space[2]} 0;
    width: 100%;

    svg {
      fill: ${theme.colors.tertiary};
      width: ${theme.space[4]};
    }

    &:hover {
      background: ${theme.colors.quinary};
      padding: calc(${theme.space[4]} + 4px) ${theme.space[3]} ${theme.space[2]} ${theme.space[3]};

      svg {
        fill: ${theme.colors.black};
      }
    }
  }

  @media ${theme.mq.tablet} {
  }
`
