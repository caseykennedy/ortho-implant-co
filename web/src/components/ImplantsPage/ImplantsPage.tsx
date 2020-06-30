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

type ImplantShape = {
  implant: {
    _rawAdditionalInfo: string
    _rawDescription: string
    _rawExcerpt: string
    _rawFeatures: string
    gallery: {
      _key: string
      _type: string
    }[]
    publishedAt: string
    slug: {
      current: string
    }
    name: string
    videoLink: string
    categories: {
      title: string
    }[]
  }
}

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

      <Divider py={10} bg="quinary" />
      <Billboard {...billboardProps} />
    </S.ImplantsPage>
  )
}

export default ImplantsPage
