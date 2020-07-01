// ImplantsPage:

// ___________________________________________________________________

import React, { useState } from 'react'

import PageTitle from '../PageTitle'
import Filters from './Sections/Filters'
import Billboard from '../Billboard'

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

const ImplantsPage = () => {
  const pageTitle = {
    altText: 'asdf',
    message: 'implants that are<br />good for all',
    title: 'quality + value',
    border: true
  }
  return (
    <S.ImplantsPage>
      <PageTitle {...pageTitle} />
      <Filters />
      <Billboard {...billboardProps} />
    </S.ImplantsPage>
  )
}

export default ImplantsPage
