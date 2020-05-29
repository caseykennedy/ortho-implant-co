// Footer:
// Global site footer
// TODO: use global nav data

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Text, Box, Flex } from '../../elements'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <S.Footer>
      Footer
    </S.Footer>
  )
}

export default Footer
