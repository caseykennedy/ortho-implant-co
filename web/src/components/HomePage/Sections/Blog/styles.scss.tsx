// Blog Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Card = styled(Flex)<{ border?: boolean }>`
  flex-direction: column;
  /* background: ${theme.colors.white}; */
  border: ${p => (!p.border ? 'none' : `2px solid ${theme.colors.black}`)};

  @media ${theme.mq.tablet} {
  }

  .card {
    &__image {
      
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding:  ${theme.space[5]};
      height: 14rem;

      @media ${theme.mq.tablet} {
        height: 20rem;
      }

      h5 {
        font-weight: 500;
      }

      .card__meta {
        display: flex;
        justify-content: space-between;
        
        font-size: calc(${theme.fontSizes[1]} / 1.15);
        font-family: ${theme.fonts.code};

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
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`

export const CardColumn = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${theme.space[5]};

  @media ${theme.mq.desktop} {
    margin-bottom: 0;
  }

  div {
    margin-top: ${theme.space[5]};
    width: 100%;

    &:first-child {
      margin-top: 0;
    }
  }
`
