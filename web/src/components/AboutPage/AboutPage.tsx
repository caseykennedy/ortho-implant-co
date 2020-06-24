// AboutPage:

// ___________________________________________________________________

import React from 'react'

import useRethinkPage from '../../hooks/useRethinkPage'

import PageTitle from '../PageTitle'
import Intro from './Sections/Intro'
import Team from './Sections/Team'

import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  const page = useRethinkPage()
  const pageTitle = {
    altText: 'Needs title',
    image: page.pageTitle.image.asset.fluid,
    message: `A better kind of<br />Orthopaedic Implant Co.`,
    // title: 'Needs title'
  }
  return (
    <S.AboutPage>
      <PageTitle {...pageTitle} />
      <Intro />
      <Team />
      <Divider py={10} bg="quinary" />
      <Divider py={10} bg="quinary" />
    </S.AboutPage>
  )
}

export default AboutPage
