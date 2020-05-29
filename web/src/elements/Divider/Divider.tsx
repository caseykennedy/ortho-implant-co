import * as React from 'react'
import { Box } from 'rebass'
import theme from '../../../config/theme'

type Props = {
  bg?: any
  py?: any
}

const Divider: React.FC<Props> = ({ bg, py }) => (
  <Box bg={bg} py={py} css={{ height: 1 }} />
)

Divider.defaultProps = {
  bg: theme.colors.background,
  py: 0
}

export default Divider
