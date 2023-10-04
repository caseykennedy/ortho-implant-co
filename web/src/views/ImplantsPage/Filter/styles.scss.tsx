// Filter Styles:

import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '@/components/elements'

export const Filter = styled.div`
  border-top: ${theme.border};
  width: 100%;
  position: relative;
  margin-top: ${theme.space[5]};

  @media ${theme.mq.tablet} {
    border-top: none;
    margin-top: 0;
  }
`

export const Navigation = styled(AnchorLink)`
  display: none;
  align-items: center;
  position: relative;
  z-index: 999;

  background: ${theme.colors.quinary};
  border-bottom: ${theme.border};
  color: ${theme.colors.text};
  padding: ${theme.space[4]};
  width: 100%;

  @media ${theme.mq.tablet} {
    display: flex;
    padding: ${theme.space[4]} ${theme.space[5]};
    position: sticky;
    top: 0;
  }

  .filter {
    &__inner {
      display: flex;
      flex-flow: row wrap;
    }

    &__btn {
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes[2]};
      text-transform: capitalize;

      padding: ${theme.space[2]} ${theme.space[4]} ${theme.space[1]};

      cursor: pointer;
      white-space: nowrap;

      &:first-child {
        @media ${theme.mq.desktop} {
          padding-left: 0;
        }
      }

      &:hover {
        color: ${theme.colors.tertiary};
      }
    }
  }
`

export const Toggler = styled.div`
  display: flex;
  margin-right: ${theme.space[5]};
  margin-left: auto;

  @media ${theme.mq.tablet} {
    margin-right: ${theme.space[7]};
  }

  .toggler__btn {
    font-family: ${theme.fonts.heading};
    font-size: calc(${theme.fontSizes[2]} * 1.15);
    text-transform: capitalize;

    margin-bottom: -4px;
    margin-left: ${theme.space[3]};
    cursor: pointer;

    &:first-child {
      @media ${theme.mq.desktop} {
        padding-left: 0;
      }
    }

    svg {
      fill: ${theme.colors.tertiary};
    }

    &:hover,
    &.active {
      svg {
        fill: ${theme.colors.black};
      }
    }
  }
`
