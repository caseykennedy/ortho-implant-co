// EdcDocs Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { Box, Flex, Heading } from '../../../../elements'

import theme from '../../../../../config/theme'

// ___________________________________________________________________

export const FormItem = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  border-bottom: 1px solid ${darken(0.15, `${theme.colors.background}`)};
  padding: ${theme.space[4]} 0;

  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};

  width: 100%;

  @media ${theme.mq.small} {
    width: calc(50% - ${theme.space[4]});
  }

  &:nth-child(odd) {
    margin-right: ${theme.space[4]};
  }

  &:last-child {
    border-bottom: none;
  }

  &:nth-last-child(2) {
    border-bottom: none;
  }

  span {
    margin-right: ${theme.space[3]};

    svg {
      width: ${theme.space[4]};
      fill: ${theme.colors.tertiary};
    }
  }
`

export const Section = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;

  .content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: ${theme.border};
    border-left: 0;
    padding: ${theme.space[4]};

    @media ${theme.mq.small} {
      /* border-left: ${theme.border}; */
    }

    ul {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      list-style: none;

      div {
        padding: ${theme.space[4]} 0;
      }
    }
  }

  .image {
    border-top: ${theme.border};
  }
`
