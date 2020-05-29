// Marker

// ___________________________________________________________________

import React from 'react'
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type MarkerProps = {
  lat: number
  lng: number
  onClick?: () => any
} & typeof defaultProps

const defaultProps = {
  text: 'Marker'
}

const Marker: React.FC<MarkerProps> = ({ text, onClick }) => {
  return <S.Wrapper alt={text} {...(onClick ? { onClick } : {})} />
}

Marker.defaultProps = defaultProps

export default Marker
