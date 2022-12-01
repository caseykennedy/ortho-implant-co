// CapturePage:

// ___________________________________________________________________

import React from 'react'
import PageTitle from '../../components/PageTitle'
import Billboard from '../../components/Billboard'

import ContactForm from './ContactForm'

import useContactPage from '../../hooks/useContactPage'

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
    message: 'message',
    title: 'title'
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
        <Box p={theme.gutter.axis} flex={2}>
          <Heading as="h4" mb={3} className="t--uppercase">
            Get in touch
          </Heading>

          <ContactForm />
        </Box>
        <Box bg="quinary" p={theme.gutter.axis} flex={1} className="mailing">
          <Heading as="h4" mb={3} className="t--uppercase">
            Message
          </Heading>
        </Box>
      </S.CapturePage>
      <Billboard {...billboardProps} />
    </>
  )
}

export default CapturePage
