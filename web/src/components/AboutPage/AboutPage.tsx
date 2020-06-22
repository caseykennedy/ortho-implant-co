// AboutPage:

// ___________________________________________________________________

import React from 'react'

import PageTitle from '../PageTitle'
import Hero from './Sections/Hero'

import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  const pageTitle = {
    altText: 'alt',
    // image: 'alt',
    message: 'Rethink Ortho',
    title: 'alt'
  }
  return (
    <S.AboutPage>
    <PageTitle {...pageTitle} />
      <Divider py={10} bg="white" />
      <Divider py={10} bg="white" />
    </S.AboutPage>
  )
}

export default AboutPage
