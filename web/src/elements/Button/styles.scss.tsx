// Button Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { lighten } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Btn } from '../../elements'

// Begin Styles
// ___________________________________________________________________

export const ButtonStyles = styled(Btn)`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: ${theme.transition.all};

  &:hover {
    background: ${theme.colors.secondary};
    color: ${lighten(0.1, `${theme.colors.primary}`)};
  }
`

// ___________________________________________________________________ Styles
