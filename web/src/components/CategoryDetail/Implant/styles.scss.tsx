// Implant Styles:

import styled from 'styled-components'

import Icon from '../../Icons'

import { Box, Flex, Heading } from '@/components/elements'

import theme from '../../../../config/theme'

export const Implant = styled(Box)``

export const Resources = styled(Flex)`
  flex-wrap: wrap;

  h4 {
    margin-top: ${theme.space[5]};

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

    span {
      /* background: ${theme.colors.primary}; */
    }
    svg {
      fill: ${theme.colors.black};
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
