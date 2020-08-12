// HomePage:

// ___________________________________________________________________

import React from 'react'

// Hooks
import useHomePage from '../../hooks/useHomePage'

import Rethink from './Sections/Rethink'
import Hero from './Sections/Hero'
import Implants from './Sections/Implants'
import Reviews from './Sections/Reviews'
import Mantra from './Sections/Mantra'
import Blog from './Sections/Blog'

import Prefooter from '../Footer/Prefooter'
import Billboard from '../Billboard'
import Section from '../Section'

import { Box, Flex, Heading, Text } from '../../elements'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  const data = useHomePage()

  // Billboard
  const billboardProps = {
    bg: theme.colors.tertiary,
    message: data.billboard.message,
    title: data.billboard.title,
    src: data.billboard.figure.asset.fluid,
    altText: data.billboard.figure.asset.title,
    btnText: data.billboard.linkTitle,
    to: data.billboard.linkTo
  }
  return (
    <S.HomePage>
      <Hero />
      <Rethink />
      <Implants />
      <Reviews />
      {/* <Mantra /> */}

      <Section bg="quinary" border={true}>
        <Heading as="h4" mb={0}>
          <mark>In the news</mark>
        </Heading>
      </Section>

      <Blog />

      {/* <Prefooter /> */}

      <Billboard {...billboardProps} />
    </S.HomePage>
  )
}

export default HomePage
