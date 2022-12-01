// Posts Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '../../../elements'

// ___________________________________________________________________

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: ${theme.colors.quinary};
  padding: ${theme.space[3]};
  width: 100%;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[5]};
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: ${theme.space[3]};

    width: 100%;

    @media ${theme.mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${theme.mq.desktop} {
      grid-template-columns: repeat(3, 1fr);
    }

    a {
      width: 100%;
    }
  }
`

export const Post = styled.div`
  display: flex;
  background: ${theme.colors.white};
  border-bottom: ${theme.border};
  height: inherit;

  .post__img {
    background: ${theme.colors.quinary};
    overflow: hidden;
    margin-bottom: ${theme.space[4]};
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: ${theme.colors.text};
    padding: ${theme.space[4]};
   
    &:hover {
      background: ${theme.colors.primary};
    }
  }

  h4 {
    font-size: calc(${theme.fontSizes[3]} / 1.25);
    font-weight: 500;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
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
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    /* padding: ${theme.space[5]} 0 0 0; */
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
