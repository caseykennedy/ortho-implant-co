// Filter Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

// ___________________________________________________________________

export const Filter = styled.div`
  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
  }

  .anchor-link {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 999;

    background: ${theme.colors.background};
    border-top: ${theme.border};
    border-bottom: ${theme.border};
    color: ${theme.colors.text};
    padding: ${theme.space[4]} 0 ${theme.space[4]} ${theme.space[2]};
    width: 100%;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[3]} 0 ${theme.space[3]} calc(${theme.space[5]});
      position: sticky;
      top: 0;
    }

    .filter {
      &__inner {
        display: flex;
        justify-content: center;
        flex-direction: column;

        width: 100%;

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
      }
    }
  }
`

export const Toggler = styled(Flex)`
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
