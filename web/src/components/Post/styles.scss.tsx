// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Post = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  .article__img {
    border-bottom: ${theme.border};
    height: 50vh;
    min-height: 333px;
  }

  @media ${theme.mq.tablet} {
  }
`

export const Article = styled(Box)`
  margin-top: -${theme.space[8]};
  width: 100%;

  background: ${theme.colors.background};

  @media ${theme.mq.tablet} {
  }

  .article {

    &__lead {
      p {
        /* font-size: calc(${theme.fontSizes[2]} * 1.25); */

        /* @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[2]} * 1.75);
        } */
      }
    }

    &__meta {
      display: flex;
      align-items: center;
      margin: ${theme.space[8]} 0 0 0;
      /* padding: ${theme.space[3]} ${theme.space[5]}; */

      /* background: ${theme.colors.quinary}; */
      /* border-bottom: ${theme.border}; */

      @media ${theme.mq.tablet} {
        /* padding: ${theme.space[5]} ${theme.space[7]}; */
      }

      .author {
      }

      .social-share {
        justify-content: flex-end;
        align-items: center;

        .title {
          color: ${theme.colors.tertiary};
          font-size: ${theme.fontSizes[1]};
        }

        span {
          margin-left: ${theme.space[2]};
        }
      }
    }
  }
`

export const Author = styled(Flex)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media ${theme.mq.tablet} {
  }

  .author {
    &__img {
      display: block;
      width: 100%;
      max-width: 100px;
      border-radius: 100rem;
    }
    &__name {
      font-size: calc(${theme.fontSizes[1]} / 1.15);
      padding: ${theme.space[3]};

      span {
        color: ${theme.colors.tertiary};
      }
    }
  }
`
