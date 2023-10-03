// CapturePage:

// ___________________________________________________________________

import React from 'react'
import PageTitle from '@/components/PageTitle'
import Billboard from '@/components/Billboard'

import ContactForm from './ContactForm'

import useContactPage from '@/hooks/useContactPage'

import { Box, Flex, Text, Heading } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const CapturePage = () => {
  const page = useContactPage()

  // Page title
  const pageTitle = {
    // altText: data.title,
    // image: page.pageTitle.image.asset.gatsbyImageData,
    message: 'Help us get to know you',
    title: ''
  }
  // Billboard
  const billboardProps = {
    bg: theme.colors.black,
    color: theme.colors.white,
    message: page.billboard.message,
    title: page.billboard.title,
    to: page.billboard.linkTo,
    btnText: page.billboard.linkTitle,
    src: page.billboard.figure.asset.gatsbyImageData,
    altText: page.billboard.figure.alt
  }
  return (
    <>
      <PageTitle {...pageTitle} />
      <S.CapturePage>
        <Box p={theme.gutter.axis} flex={1}>
          <Heading as="h4" mb={5} className="t--uppercase">
            Please fill out the form below to gain access to...
          </Heading>

          <ContactForm />
        </Box>
        <Box bg="quinary" p={theme.gutter.axis} className="mailing">
          <Heading as="h3" fontWeight={400} mb={3}>
            We need to rethink the way implants are used, sold, and priced.
          </Heading>
          <p>In order to do that, we need to learn more about you.</p>
        </Box>
      </S.CapturePage>
      <Billboard {...billboardProps} />
    </>
  )
}

export default CapturePage
