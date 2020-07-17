// Filter Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

// ___________________________________________________________________

export const Filter = styled.div`
  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
  }
`

export const Navigation = styled(AnchorLink)`
  display: flex;
  position: relative;
  z-index: 999;

  background: ${theme.colors.quinary};
  border-bottom: ${theme.border};
  color: ${theme.colors.text};
  padding: ${theme.space[4]} 0 ${theme.space[4]} ${theme.space[2]};
  width: 100%;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[3]} 0 ${theme.space[3]} calc(${theme.space[5]} + 6px);
    position: sticky;
    top: 0;
  }

  .filter {
    &__inner {
      display: flex;
      flex-direction: column;

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }
    }

    &__btn {
      font-family: ${theme.fonts.heading};
      font-size: calc(${theme.fontSizes[2]} * 1.15);
      text-transform: capitalize;

      padding: ${theme.space[2]} ${theme.space[4]};
      margin-bottom: -2px;
      cursor: pointer;

      &:first-child {
        @media ${theme.mq.desktop} {
          padding-left: 0;
        }
      }

      &:hover {
        color: ${theme.colors.tertiary};
      }

      /* &--all {
        color: ${theme.colors.primary};
      } */
    }
  }
`
