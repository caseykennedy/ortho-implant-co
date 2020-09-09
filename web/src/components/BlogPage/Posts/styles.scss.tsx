// Posts Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex, AnimatedFlex } from '../../../elements'

// ___________________________________________________________________

export const Posts = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  padding: ${theme.space[7]};

  a {
    width: 100%;
  }
`

export const Item = styled(AnimatedFlex)`
  p {
    /* font-size: calc(${theme.fontSizes[1]} * 1); */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`
