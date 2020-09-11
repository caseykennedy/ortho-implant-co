// LegalPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import PageTitle from '../PageTitle'
import Billboard from '../Billboard'
import Section from '../Section'
import BlockContent from '../BlockContent'

// Hooks
import useLegal from '../../hooks/useLegal'

// Elements
import { AnimatedBox, Box, Heading, Text } from '../../elements'
import Divider from '../../elements/Divider'

import * as S from './styles.scss'
import theme from '../../../config/theme'
import Prefooter from '../Footer/Prefooter'

// ___________________________________________________________________

const LegalPage = () => {
  const page = useLegal()
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: page.pageTitle.message,
    title: page.pageTitle.title
  }
  const billboardProps = {
    bg: theme.colors.tertiary,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.fluid,
    altText: page.billboard.figure.asset.title,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo
  }
  return (
    <S.LegalPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        {page._rawBody && <BlockContent blocks={page._rawBody || []} />}
      </Section>

      <Billboard {...billboardProps} />
    </S.LegalPage>
  )
}

export default LegalPage
