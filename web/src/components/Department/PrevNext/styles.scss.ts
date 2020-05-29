// Staff Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const PrevNext = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.secondary};
  border-top: ${theme.border};
`

export const Button = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${theme.space[7]} ${theme.space[6]};
  width: 100%;

  background: ${theme.colors.secondary};
  color: ${theme.colors.background};
  font-family: MediaSans;
  font-size: ${theme.fontSizes[2]};
  letter-spacing: 2px;

  @media ${theme.mq.small} {
    padding: ${theme.space[8]} ${theme.space[4]};
    width: 50%;
    font-size: ${theme.fontSizes[3]};
  }

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
  }

  &:nth-child(1) {
    border-right: none;
    border-bottom: ${theme.border};

    @media ${theme.mq.small} {
      border-right: ${theme.border};
      border-bottom: none;
    }
  }
`
