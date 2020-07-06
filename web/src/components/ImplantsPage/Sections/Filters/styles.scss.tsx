// Filters Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const ProductGrid = styled.div`
  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
  }
`

export const Filter = styled(AnchorLink)`
  display: flex;
  position: relative;
  z-index: 999;

  background: ${theme.colors.quinary};
  border-bottom: ${theme.border};
  color: ${theme.colors.text};
  padding: ${theme.space[4]} 0 ${theme.space[4]} ${theme.space[5]};
  width: 100%;

  @media ${theme.mq.tablet} {
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
      font-size: ${theme.fontSizes[2]};
      font-weight: 500;
      text-transform: uppercase;

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

export const Spacer = styled(Box)`
  background: ${theme.colors.white};

  @media ${theme.mq.desktop} {
    min-width: ${theme.logoWidth};
  }
`

export const Decorator = styled(Flex)`
  svg {
    width: 900px;
  }
`

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  border-bottom: ${theme.border};
  border-right: ${theme.border};
  background: ${theme.colors.white};

  @media ${theme.mq.tablet} {
  }

  &:nth-child(4n) {
    border-right: none;
    background: ${theme.colors.primary};
  }

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
      width: 40%;
      padding: ${theme.space[4]} 0 0 ${theme.space[4]};

      img {
        /* mix-blend-mode: luminosity; */
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding:  ${theme.space[4]};

      h4 {
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 0;
        font-size: calc(${theme.fontSizes[3]} / 1.5);

        @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[3]} / 1.25);
        }

        @media ${theme.mq.desktop} {
          font-size: calc(${theme.fontSizes[3]} / 1);
        }
      }

      h5 {
        color: ${theme.colors.white};
      }

      .card__meta {
        display: flex;
        justify-content: space-between;
        
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        font-family: ${theme.fonts.code};
        color: ${theme.colors.text};

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

export const CardHolder = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.quinary};
  width: 100%;
`

export const CardColumn = styled(Flex)`
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }
`
