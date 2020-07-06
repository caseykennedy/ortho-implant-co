// BlogPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

import useRethinkPage from '../../hooks/useRethinkPage'

// Elements
import { AnimatedBox, Box, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  btnText: 'See our implants',
  color: theme.colors.text,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: true
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}

const BlogPage = () => {
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'Blog',
    title: 'OIC'
  }
  return (
    <S.BlogPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        <Heading as="h4" className="t--uppercase">In progress...</Heading>
      </Section>

      <Prefooter />
    </S.BlogPage>
  )
}

export default BlogPage
