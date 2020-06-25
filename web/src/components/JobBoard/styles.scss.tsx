// JobBoard Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../../config/theme'
import { Box, Flex } from '../../elements'

// ___________________________________________________________________

export const JobBoard = styled(Flex)`
  background: ${theme.colors.tertiary};
  border-top: ${theme.border};

  h4 {
    margin-bottom: 0;
    margin-top: ${theme.space[4]};
  }

  img {
    mix-blend-mode: luminosity;
  }
`
