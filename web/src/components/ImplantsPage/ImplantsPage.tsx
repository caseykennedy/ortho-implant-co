// ImplantsPage:

// ___________________________________________________________________

import React, { useState } from 'react'

import PageTitle from '../PageTitle'
import Filters from './Sections/Filters'
import Billboard from '../Billboard'
import Section from '../Section'

import Divider from '../../elements/Divider'
import { Box, Text } from '../../elements'

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
    message: `implants <span style="color:#9D9FA2;">that are<br />good for all</span>`,
    title: 'quality + value',
    border: true
  }
  return (
    <S.ImplantsPage>
      <PageTitle {...pageTitle} />
      <Filters />
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
