// RethinkPage:

// ___________________________________________________________________

import React from 'react'

import PageTitle from '@/components/PageTitle'
import Approach from './Approach'
import Purpose from './Purpose'
import Rethink from './Rethink'
import Billboard from '@/components/Billboard'

import useRethinkPage from '@/hooks/useRethinkPage'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const RethinkPage = () => {
  const page = useRethinkPage()

  // Page Title
  const pageTitle = {
    altText: page.pageTitle.message,
    image: page.pageTitle.image.asset.gatsbyImageData,
    message: `Rethink<br /><span style="color:#9D9FA2;">orthopaedic implants</span>`,
    title: page.pageTitle.title
  }

  // Billboard
  const billboardProps = {
    bg: theme.colors.black,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.gatsbyImageData,
    altText: page.billboard.figure.alt,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo
  }
  return (
    <S.RethinkPage>
      <PageTitle {...pageTitle} />
      <Approach />
      <Purpose />
      <Rethink />
      <Billboard {...billboardProps} />
    </S.RethinkPage>
  )
}

export default RethinkPage
