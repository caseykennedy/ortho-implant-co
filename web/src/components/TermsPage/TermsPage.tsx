// TermsPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

// Hooks
import useTerms from '../../hooks/useTerms'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../config/theme'

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

const TermsPage = () => {
  const page = useTerms()
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: page.pageTitle.message,
    title: page.pageTitle.title
  }
  return (
    <S.TermsPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
      </Section>

      <Billboard {...billboardProps} />
    </S.TermsPage>
  )
}

export default TermsPage
