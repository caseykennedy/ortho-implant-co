// Staff Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../../elements'

import theme from '../../../../../config/theme'

// ___________________________________________________________________

export const PrevNext = styled(Flex)`
  flex-wrap: wrap;
  border-top: ${theme.border};
`

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${theme.space[5]} ${theme.space[5]};
  width: 100%;

  background: ${theme.colors.tertiary};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[3]};
  font-weight: 500;
  text-transform: uppercase;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]} ${theme.space[7]};
    width: 50%;
    font-size: ${theme.fontSizes[3]};
  }

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
  }

  &:nth-child(2) {
    border-left: none;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      border-left: ${theme.border};
      border-top: none;
    }
  }

  .button {
    &__title {
      /* display: flex; */
      justify-content: space-between;
      margin-bottom: ${theme.space[7]};
      font-size: ${theme.fontSizes[0]};

      svg {
        width: 24px;
        transform: rotate(-180deg);
      }

      &--next {
        margin-top: ${theme.space[7]};
        margin-bottom: 0;

        svg {
          transform: rotate(0deg);
        }
      }
    }
  }
`
