// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'

import { Box, Flex } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: ${theme.colors.background};
`

export const Main = styled(animated.main)`
  max-height: 100%;
  position: relative;
  width: ${theme.siteWidth};
`

// ___________________________________________________________________
