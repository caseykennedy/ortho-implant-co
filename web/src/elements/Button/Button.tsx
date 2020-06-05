// Button:

// ___________________________________________________________________

// Core
import * as React from 'react'
import Link from 'gatsby'

import Icon from '../../components/Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children?: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  to: '/'
}

const Button: React.FC<Props> = ({ children, to }) => {
  return (
    <S.Button to={to}>
      {children}
      <Icon name="nextArrow" />
    </S.Button>
  )
}

Button.defaultProps = defaultProps

export default Button

// ___________________________________________________________________
