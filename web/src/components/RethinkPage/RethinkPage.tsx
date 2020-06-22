// RethinkPage:

// ___________________________________________________________________

import React from 'react'

import PageTitle from '../PageTitle'
import Approach from './Sections/Approach'
import Purpose from './Sections/Purpose'
import Rethink from './Sections/Rethink'

import useRethinkPage from '../../hooks/useRethinkPage'

import Divider from '../../elements/Divider'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const RethinkPage = () => {
  const page = useRethinkPage()
  // console.log('Rethink Page')
  // console.log(page)
  const pageTitle = {
    altText: page.pageTitle.message,
    image: page.pageTitle.image.asset.fluid,
    message: page.pageTitle.message,
    title: page.pageTitle.title
  }
  return (
    <S.RethinkPage>
      <PageTitle {...pageTitle} />
      <Approach />
      <Purpose />
      <Rethink />
      <Divider py={10} bg="primary" />
      <Divider py={10} bg="primary" />
    </S.RethinkPage>
  )
}

export default RethinkPage
