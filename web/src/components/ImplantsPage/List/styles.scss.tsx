// List Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '../../../elements'

// ___________________________________________________________________

export const List = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  a {
    width: 100%;
  }
`

export const Item = styled(AnimatedFlex)`
  align-items: center;
  justify-content: space-between;
  padding: ${theme.space[5]};
  width: 100%;

  border-bottom: 2px solid ${theme.colors.quaternary};
  color: ${theme.colors.text};
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[5]} ${theme.space[7]};
  }

  &:hover {
    background: ${theme.colors.quaternary};

    h5 {
      color: ${theme.colors.text};
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
    display: flex;
    justify-content: space-between;
    
    font-size: calc(${theme.fontSizes[1]} / 1.1);
    font-family: ${theme.fonts.code};
    color: ${theme.colors.tertiary};
    text-transform: uppercase;

    span {
      transition: ${theme.transition.all};
      margin-top: -3px;
      margin-left: ${theme.space[3]};

      svg {
        width: 20px;
        fill: ${theme.colors.tertiary};
      }
    }
  }

  .thumb {
    width: 4%;
    height: auto;
    margin-right: ${theme.space[5]};

    img {
      /* mix-blend-mode: luminosity; */
    }
  }
`
