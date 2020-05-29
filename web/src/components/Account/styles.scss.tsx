// Account Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const AccountPage = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
  border-left: none;

  @media ${theme.mq.small} {
    flex-direction: row;
  }
`

export const ImageBox = styled(Flex)`
  justify-content: stretch;
  border-right: ${theme.border};

  &.border {
    &--top {
      border-top: ${theme.border};
    }
  }
`

export const Main = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.background};
`

export const Section = styled(Flex)`
  width: 100%;

  .maint-date {
    width: 100%;
    padding: ${theme.space[4]};
    margin-top: ${theme.space[4]};
    margin-bottom: ${theme.space[6]};

    border: ${theme.border};
    background: ${darken(0.05, `${theme.colors.background}`)};

    @media ${theme.mq.small} {
      width: 48%;
    }
  }

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

export const Survey = styled.a`
  background: ${theme.colors.background};
  padding: ${theme.space[6]} ${theme.space[4]};
  border-top: ${theme.border};

  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[2]};
  text-align: center;

  &:hover {
    background: ${darken(0, `${theme.colors.primary}`)};
    color: ${theme.colors.text};
  }
`
