// Button:

// ___________________________________________________________________

// Core
import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '../../components/Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children?: React.ReactNode
  invert?: boolean
} & typeof defaultProps

const defaultProps = {
  to: '/'
}

const Button: React.FC<Props> = ({ children, to, invert }) => {
  return (
    <Link to={to}>
      <S.Button invert={invert}>
        {children}
        <Icon name="nextArrow" />
      </S.Button>
    </Link>
  )
}

export default Button

// ___________________________________________________________________

Button.defaultProps = defaultProps
