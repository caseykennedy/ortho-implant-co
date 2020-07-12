// Aside Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Aside = styled(Box)`
  flex-direction: column;
  position: relative;

  background: ${theme.colors.white};
  border-top: ${theme.border};

  @media ${theme.mq.tablet} {
    border-left: ${theme.border};
    border-top: none;
    border-bottom: none;
  }

  .sticky {
    position: sticky;
    top: 0;
  }

  .recent-posts {
    flex-direction: column;
  }
`

export const Post = styled(Link)`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.25;

  border-bottom: ${theme.border};
  padding: ${theme.space[5]};
  min-height: 400px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${theme.colors.quinary};
  }

  

  .post {
    &__img {
      margin-bottom: ${theme.space[5]};
    }

    &__content {}

    &__meta {
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.space[7]};
    
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
`
