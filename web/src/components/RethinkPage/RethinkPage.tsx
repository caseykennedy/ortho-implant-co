// RethinkPage:

// ___________________________________________________________________

import React from 'react'
import 'swiper/css/swiper.css'

import Hero from './Sections/Hero'
import Approach from './Sections/Approach'
import Purpose from './Sections/Purpose'
import Rethink from './Sections/Rethink'

import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const RethinkPage = () => {
  return (
    <S.RethinkPage>
      <Hero />
      {/* <Divider py={8} bg="white" /> */}
      <Approach />
      <Purpose />
      <Rethink />
      <Divider py={10} bg="primary" />
      <Divider py={10} bg="primary" />
    </S.RethinkPage>
  )
}

export default RethinkPage
