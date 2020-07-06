// AboutPage:

// ___________________________________________________________________

import React from 'react'

import useAboutPage from '../../hooks/useAboutPage'

import PageTitle from '../PageTitle'
import Intro from './Sections/Intro'
import Team from './Sections/Team'
import Billboard from '../Billboard'
import JobBoard from '../JobBoard'

import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: 'primary',
  message: "Let's schedule<br />a one-to-one",
  title: 'Ready to chat?',
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
}

const AboutPage = () => {
  const page = useAboutPage()
  const pageTitle = {
    altText: page.pageTitle.message,
    image: page.pageTitle.image.asset.fluid,
    message: `<span style="color:#9D9FA2;">We aim to</span><br />change the system`,
    // title: 'Needs title'
  }
  return (
    <S.AboutPage>
      <PageTitle {...pageTitle} />
      <Intro />
      <Team />
      <JobBoard />
      <Billboard {...billboardProps} />
    </S.AboutPage>
  )
}

export default AboutPage
