// Marker Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Box, Flex, Heading } from '@/components/elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${theme.iconWidth};
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`
