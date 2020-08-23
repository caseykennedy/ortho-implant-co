// ImplantsPage:

// ___________________________________________________________________

import React, { useState } from 'react'

import PageTitle from '../PageTitle'
import Filter from './Filter'
import Billboard from '../Billboard'
import Section from '../Section'

import Divider from '../../elements/Divider'
import { Box, Text } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.black,
  color: theme.colors.white,
  message:
    'World-class orthopaedic implants<br />and technology are affordable.',
  title: 'Rethink',
  invert: false,
  btnText: 'Learn how',
  to: '/rethink'
  // src: 'im-nail.jpg',
  // altText: 'Doctors in the operating room.'
}

const ImplantsPage = () => {
  const pageTitle = {
    altText: 'asdf',
    message: `implants <span style="color:#9D9FA2;">that are<br />good for all</span>`,
    title: 'quality + value',
    border: true
  }
  return (
    <S.ImplantsPage>
      <PageTitle {...pageTitle} />
      <Filter />
      <Box
        bg="secondary"
        mt="-2px"
        px={theme.gutter.axis}
        // py="1px"
        position="relative"
      />
      <Billboard {...billboardProps} />
    </S.ImplantsPage>
  )
}

export default ImplantsPage
