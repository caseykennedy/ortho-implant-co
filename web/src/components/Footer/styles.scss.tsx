// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: row;
  position: relative;

  padding: ${theme.space[5]};
  color: ${theme.colors.background};
  background: ${theme.colors.black};
`

export const Inner = styled(Flex)`
  @media ${theme.mq.small} {
  }
`

export const Nav = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.space[3]};

  @media ${theme.mq.small} {
    padding: ${theme.space[4]};
  }

  ul {
    display: inline-block;
    margin-right: ${theme.space[5]};
    margin-bottom: ${theme.space[5]};
    margin-left: 0;

    a {
      display: block;
      color: ${theme.colors.background};
      font-size: ${theme.fontSizes[1]};
      line-height: 1.5;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`

export const Contact = styled(Flex)`
  @media ${theme.mq.small} {
  }
`
