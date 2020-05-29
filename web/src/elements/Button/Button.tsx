// Button:

// ___________________________________________________________________

// Core
import * as React from 'react'
import Link from 'gatsby'

// Theme
import theme from '../../../config/theme'

// Styles
import { ButtonStyles } from './styles.scss'

// ___________________________________________________________________

type Props = {
  children?: React.ReactNode
  type?: 'reset' | 'button' | 'submit' | undefined
  value?: string
}

const Button: React.FC<Props> = ({ children, type, value }) => {
  return (
    <ButtonStyles type={type} value={value} px={5} py={3}>
      {children}
    </ButtonStyles>
  )
}

export default Button

// ___________________________________________________________________
