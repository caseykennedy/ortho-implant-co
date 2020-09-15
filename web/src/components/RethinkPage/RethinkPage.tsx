// RethinkPage:

// ___________________________________________________________________

import React from 'react'

import PageTitle from '../PageTitle'
import Section from '../Section'
import Approach from './Approach'
import Purpose from './Purpose'
import Rethink from './Rethink'
import Billboard from '../Billboard'

import useRethinkPage from '../../hooks/useRethinkPage'

import Divider from '../../elements/Divider'
import { Text, Heading, Box } from '../../elements'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const RethinkPage = () => {
  const page = useRethinkPage()
  // console.log('Rethink Page')
  // console.log(page)

  // Page Title
  const pageTitle = {
    altText: page.pageTitle.message,
    image: page.pageTitle.image.asset.fluid,
    message: `Rethink<br /><span style="color:#9D9FA2;">orthopaedic implants</span>`,
    title: page.pageTitle.title
  }

  // Billboard
  const billboardProps = {
    bg: theme.colors.black,
    message: page.billboard.message,
    title: page.billboard.title,
    src: page.billboard.figure.asset.fluid,
    altText: page.billboard.figure.alt,
    btnText: page.billboard.linkTitle,
    to: page.billboard.linkTo
  }
  return (
    <S.RethinkPage>
      <PageTitle {...pageTitle} />
      <Approach />
      <Purpose />
      <Rethink />
      {/* <Section border={true}>
        <Box py={7} width={[1, 2 / 3, 1 / 2]}>
          <Heading as="h4" color="primary">
            good for all
          </Heading>

          <Heading as="h3" fontWeight={400}>
            It's good for the surgeon, the hospital, and above all, good for the
            patient.
          </Heading>
          
          <Text as="p">
            And because of that, we think we can help turn our healthcare system
            into a better system, one that will actually be good for all.
          </Text>
        </Box>
      </Section> */}
      <Billboard {...billboardProps} />
    </S.RethinkPage>
  )
}

export default RethinkPage
