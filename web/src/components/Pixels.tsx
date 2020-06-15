// Pixels
// Decorator with fill props

// ___________________________________________________________________

import * as React from 'react'
import theme from '../../config/theme'

// ___________________________________________________________________

type Props = {
  fillA?: string
  fillB?: string
  fillC?: string
  fillD?: string
}

const defaultProps = {
  fillA: theme.colors.quinary,
  fillB: theme.colors.quaternary,
  fillC: theme.colors.tertiary,
  fillD: theme.colors.primary
}

const Pixels: React.FC<Props> = ({ fillA, fillB, fillC, fillD }) => (
  <svg viewBox="0 0 444 222">
    <title>Orthopaedic Implant Co.</title>
    <rect width="111" height="111" fill={fillA} />
    <rect x="111" width="111" height="111" fill={fillB} />
    <rect x="333" width="111" height="111" fill={fillC} />
    <rect
      x="333"
      y="111"
      width="111"
      height="111"
      fill={fillD}
    />
  </svg>
)

export default Pixels

// ___________________________________________________________________

Pixels.defaultProps = defaultProps
