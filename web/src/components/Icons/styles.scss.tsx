// Icon Component Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'

// Begin Styles
// ___________________________________________________________________

const IconStyle = styled.span`
  font-size: 1rem;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  color: ${props => (props.color ? props.color : theme.colors.black)};

  svg {
    fill: ${props => (props.color ? props.color : theme.colors.black)};
    transition: ${theme.transition.all};
  }
`

export default IconStyle
