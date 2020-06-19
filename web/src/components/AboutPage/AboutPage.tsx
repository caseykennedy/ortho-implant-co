// AboutPage:

// ___________________________________________________________________

import React from 'react'
import 'swiper/css/swiper.css'

import Hero from './Sections/Hero'

import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  return (
    <S.AboutPage>
      <Hero />
      <Divider py={10} bg="white" />
      <Divider py={10} bg="white" />
    </S.AboutPage>
  )
}

export default AboutPage
