// Filters Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Filters = styled.div`
  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
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
  background: ${theme.colors.quinary};

  @media ${theme.mq.tablet} {
  }

  &:hover {
    background: ${theme.colors.white};
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
        font-size: calc(${theme.fontSizes[3]} / 1);
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
  border-top: ${theme.border};
  width: 100%;
`

export const CardColumn = styled(Flex)`
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }
`
