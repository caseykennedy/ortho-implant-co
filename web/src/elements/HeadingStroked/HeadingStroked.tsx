// Heading with inner stroke

// ___________________________________________________________________

import styled from 'styled-components'

// Elements
import { Heading } from '../'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  fillColor?: string
  strokeColor?: string
  strokeWidth?: string
}

const HeadingStroked = styled(Heading)<Props>`
  -webkit-text-fill-color: ${p => p.fillColor};
  -webkit-text-stroke-width: ${p => p.strokeWidth};
  -webkit-text-stroke-color: ${p => p.strokeColor};
`

HeadingStroked.defaultProps = {
  fillColor: theme.colors.background,
  strokeColor: theme.colors.text,
  strokeWidth: '1px'
}

export default HeadingStroked

// ___________________________________________________________________
