// AboutPage:

// ___________________________________________________________________

import React from 'react'

import useAboutPage from '../../hooks/useAboutPage'

import PageTitle from '../../components/PageTitle'
import Intro from './Intro'
import Team from './Team'
import Billboard from '../../components/Billboard'
import JobBoard from '../../components/JobBoard'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  const page = useAboutPage()
  // console.log(page)

  // Page Title
  const pageTitle = {
    altText: page.pageTitle.message,
    image: page.pageTitle.image.asset.gatsbyImageData,
    message: `<span style="color:#9D9FA2;">We aim to</span><br />change the system`,
    // title: 'Needs title'
  }

  // Billboard
  const billboardProps = {
    bg: theme.colors.white,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.gatsbyImageData,
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
