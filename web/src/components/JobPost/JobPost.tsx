// JobPost:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

import useRethinkPage from '@/hooks/useRethinkPage'

// Elements
import { AnimatedBox, Box, Heading } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  btnText: 'Meet the team',
  to: '/about',
  color: theme.colors.white,
  message: 'we make orthopaedic implants<br />that are good for all.',
  title: 'Mantra',
  invert: false
  // src: 'operating-room.jpg',
  // altText: 'Doctors in the operating room.'
}

const JobPost: React.FC<CareersContextShape> = ({ pageContext }) => {
  const data = pageContext.page

  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.gatsbyImageData,
    message: data.title,
    title: data.publishedAt
  }
  return (
    <S.JobPost>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        {data._rawExcerpt && <BlockContent blocks={data._rawExcerpt || []} />}

        {data._rawBody && <BlockContent blocks={data._rawBody || []} />}
      </Section>

      <Billboard {...billboardProps} />
    </S.JobPost>
  )
}

export default JobPost
