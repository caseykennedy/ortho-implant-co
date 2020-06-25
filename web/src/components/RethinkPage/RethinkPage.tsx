// RethinkPage:

// ___________________________________________________________________

import React from 'react'

import PageTitle from '../PageTitle'
import Approach from './Sections/Approach'
import Purpose from './Sections/Purpose'
import Rethink from './Sections/Rethink'
import Billboard from '../Billboard'

import useRethinkPage from '../../hooks/useRethinkPage'

import Divider from '../../elements/Divider'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  color: theme.colors.text,
  message: 'Let\'s schedule<br />a one-to-one',
  title: 'Ready to chat?',
  invert: true
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}

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
      <Billboard {...billboardProps} />
    </S.RethinkPage>
  )
}

export default RethinkPage
