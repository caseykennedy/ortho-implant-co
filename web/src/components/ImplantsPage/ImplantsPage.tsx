// ImplantsPage:

// ___________________________________________________________________

import React from 'react'
import 'swiper/css/swiper.css'

import Hero from './Sections/Hero'

import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const ImplantsPage = () => {
  return (
    <S.ImplantsPage>
      <Hero />
      <Divider py={10} bg="primary" />
      <Divider py={10} bg="primary" />
    </S.ImplantsPage>
  )
}

export default ImplantsPage
