// AboutPage:

// ___________________________________________________________________

import React from 'react'

import useAboutPage from '../../hooks/useAboutPage'

import PageTitle from '../PageTitle'
import Intro from './Intro'
import Team from './Team'
import Billboard from '../Billboard'
import JobBoard from '../JobBoard'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  const page = useAboutPage()
  // console.log(page)

  // Page Title
  const pageTitle = {
    altText: page.pageTitle.message,
    image: page.pageTitle.image.asset.fluid,
    message: `<span style="color:#9D9FA2;">We aim to</span><br />change the system`,
    // title: 'Needs title'
  }

  // Billboard
  const billboardProps = {
    bg: theme.colors.white,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.fluid,
    altText: page.billboard.figure.alt,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo
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
