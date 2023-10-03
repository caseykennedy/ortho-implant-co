// List Styles:

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '@/components/elements'

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  a {
    width: 100%;
  }
`

export const Item = styled(AnimatedFlex)`
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: ${theme.space[5]};
  width: 100%;

  border-bottom: 2px solid ${theme.colors.black};
  color: ${theme.colors.text};
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    flex-direction: row;
    min-height: 175px;
  }

  @media ${theme.mq.tablet} {
    padding: ${theme.space[4]} ${theme.space[7]} ${theme.space[4]} 0;
  }

  &:hover {
    background: ${theme.colors.primary};

    h5 {
      color: ${theme.colors.text};
    }

    .meta {
      color: ${theme.colors.text};

      svg {
        fill: ${theme.colors.black};
      }
    }
  }

  h3 {
    font-weight: 500;
    font-size: calc(${theme.fontSizes[3]} / 1.5);
    text-transform: uppercase;
    margin-bottom: -8px;
    width: 50%;

    /* @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]} / 1.15);
    } */
  }

  h5 {
    color: ${theme.colors.tertiary};
    margin-right: auto;
    display: none;

    @media ${theme.mq.tablet} {
      display: initial;
    }
  }

  .meta {
    display: none;
    justify-content: space-between;
    
    font-size: calc(${theme.fontSizes[1]} / 1.1);
    font-family: ${theme.fonts.code};
    color: ${theme.colors.tertiary};
    text-transform: uppercase;
    transition: ${theme.transition.all};

    @media ${theme.mq.tablet} {
      display: flex;
    }

    span {
      transition: ${theme.transition.all};
      margin-top: -3px;
      margin-left: ${theme.space[3]};

      svg {
        width: ${theme.iconWidth};
        fill: ${theme.colors.tertiary};
      }
    }
  }

  .thumb {
    width: 120px;
    height: auto;
    padding: 0 ${theme.space[5]} 0 ${theme.space[5]};

    @media ${theme.mq.tablet} {
      width: ${theme.logoWidth};
      margin-right: ${theme.space[5]};
      padding: 0 ${theme.space[5]} 0 ${theme.space[7]};
    }

    img {
      /* mix-blend-mode: luminosity; */
    }
  }
`
