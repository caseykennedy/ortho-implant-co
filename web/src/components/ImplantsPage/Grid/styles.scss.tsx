// Grid Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../../elements'

// ___________________________________________________________________

export const Grid = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.quinary};
  width: 100%;
`

export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: ${theme.border};
  border-right: ${theme.border};
  background: ${theme.colors.white};

  &:hover {
    background: ${theme.colors.primary};
  }

  &.card {
    &--title {
      background: ${theme.colors.tertiary};
    }
  }

  .card {
    &__thumb {
      width: 75%;
      height: 200px;
      padding: ${theme.space[4]} 0 0 ${theme.space[4]};

      img {
        /* mix-blend-mode: luminosity; */
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* margin-top: ${theme.space[5]}; */
      padding:  ${theme.space[4]};

      h4 {
        font-weight: 400;
        text-transform: capitalize;
        margin-bottom: 0;
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[3]} / 1.25);

        @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[3]} / 1.15);
        }

        @media ${theme.mq.desktop} {
          font-size: calc(${theme.fontSizes[3]} / 1);
        }
      }

      h5 {
        color: ${theme.colors.tertiary};
      }

      .card__meta {
        display: flex;
        justify-content: space-between;
        
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        font-family: ${theme.fonts.code};
        color: ${theme.colors.text};
        text-transform: uppercase;

        span {
          transition: ${theme.transition.all};

          svg {
            width: 24px;
            /* fill: ${theme.colors.text}; */
          }
        }
      }
      
    }
  }
`

export const CardColumn = styled(Flex)`
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }
`
