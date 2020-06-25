// ImplantsPage:

// ___________________________________________________________________

import React from 'react'

import Hero from './Sections/Hero'
import Divider from '../../elements/Divider'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const ImplantsPage = () => {
  return (
    <S.ImplantsPage>
      <Hero />
      <Divider py={10} bg="white" />
      <Divider py={10} bg="white" />
    </S.ImplantsPage>
  )
}

export default ImplantsPage
