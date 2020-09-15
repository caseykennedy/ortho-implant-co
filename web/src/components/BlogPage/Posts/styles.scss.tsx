// Posts Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '../../../elements'

// ___________________________________________________________________

export const Posts = styled(Flex)`
  flex-wrap: wrap;

  background: ${theme.colors.quinary};
  padding: ${theme.space[3]};
  width: 100%;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[5]};
  }

  a {
    width: 100%;
  }
`

export const Post = styled(Flex)`
  flex-direction: column;

  background: ${theme.colors.white};
  border-bottom: ${theme.border};
  height: inherit;

  @media ${theme.mq.tablet} {

  }

  .post__img {
    max-height: 150px;
    height: 150px;
    overflow: hidden;
    width: 50%;
    margin-bottom: ${theme.space[5]};
  }

  a {
    color: ${theme.colors.text};
    padding: ${theme.space[5]};
    height: inherit;
   
    &:hover {
      background: ${theme.colors.primary};
    }
  }

  h4 {
    font-size: calc(${theme.fontSizes[3]} / 1.25);
    font-weight: 400;
    text-transform: none;
  }

  p {
    /* font-size: calc(${theme.fontSizes[1]} * 1); */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .card__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.space[5]};
    padding: ${theme.space[5]} 0 0 0;
    width: 100%;
    
    font-size: calc(${theme.fontSizes[1]} / 1.15);
    font-family: ${theme.fonts.code};

    span {
      transition: ${theme.transition.all};

      svg {
        width: ${theme.iconWidth};
        /* fill: ${theme.colors.text}; */
      }
    }
  }
`
