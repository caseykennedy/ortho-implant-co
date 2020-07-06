// ContactPage:

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

const ContactPage = () => {
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.fluid,
    message: 'Talk to us',
    title: 'Contact'
  }
  return (
    <S.ContactPage>
      <PageTitle {...pageTitle} />
      <Section bg="quinary">
        <Heading as="h4" className="t--uppercase">Mailing address</Heading>
        <p>
          316 California Ave #701,
          <br />
          Reno, NV 89509
        </p>
        <Heading as="h4" className="t--uppercase">Office</Heading>
        <p>
          770 Smithridge Dr.
          <br />
          STE 400, Reno NV 89502
        </p>
        <Heading as="h4" className="t--uppercase">TEL | FAX</Heading>
        <p>
        +1 (800) 619-2797 — toll free 
        <br />
        +1 (775) 636-8281 — direct
        <br />
        +1 (775) 636-8284 — fax
        </p>
      </Section>

      <Prefooter />
    </S.ContactPage>
  )
}

export default ContactPage
