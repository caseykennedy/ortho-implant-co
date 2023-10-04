// Post Styles:

import styled from 'styled-components'

import { Box, Flex, Heading } from '@/components/elements'

import theme from '../../../config/theme'

export const Post = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  .post__img {
    background: ${theme.colors.quinary};
    border-bottom: ${theme.border};
    /* padding: ${theme.space[5]}; */
    width: 100%;

    .gatsby-image-wrapper {
      max-height: 400px;
      overflow: hidden;
    }
  }

  @media ${theme.mq.tablet} {
  }
`

export const Article = styled.div`
  background: ${theme.colors.background};
  width: 100%;  

  @media ${theme.mq.tablet} {
  }

  .article {

    &__lead {
      display: flex;

      p {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
        line-height: 1.5;
        max-width: 800px;

        @media ${theme.mq.tablet} {
          font-size: calc(${theme.fontSizes[2]} * 1.5);
        }
      }
    }

    &__meta {
      display: flex;
      align-items: center;
      margin: ${theme.space[4]} 0 0 0;
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

export const Author = styled.div`
  display: flex;
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
