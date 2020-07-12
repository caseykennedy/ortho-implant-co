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

  @media ${theme.mq.tablet} {
  }
`

export const Article = styled(Box)`
  flex-wrap: wrap;
  width: 100%;

  background: ${theme.colors.background};

  @media ${theme.mq.tablet} {
  }

  .article {
    &__img {
      border-bottom: ${theme.border};
      max-height: 400px;
    }

    &__lead {
      p {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
      }
    }

    &__meta {
      display: flex;
      align-items: center;
      margin: 0;
      padding: ${theme.space[3]} ${theme.space[5]};

      /* background: ${theme.colors.quinary}; */
      border-bottom: ${theme.border};

      @media ${theme.mq.tablet} {
        padding: ${theme.space[5]} ${theme.space[7]};
      }

      .author {
      }

      .social-share {
        justify-content: flex-end;
        align-items: center;

        p {
          color: ${theme.colors.tertiary};
          font-size: calc(${theme.fontSizes[1]} / 1.15);
          margin: 0 ${theme.space[3]} 0 0;
        }

        .ico {
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
