// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: ${theme.colors.background};
`

export const Main = styled(animated.main)`
  max-height: 100%;
  position: relative;
  max-width: ${theme.siteWidth};
  overflow: hidden;
`

// ___________________________________________________________________
