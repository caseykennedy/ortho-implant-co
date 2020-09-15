// HomePage:

// ___________________________________________________________________

import React from 'react'

// Hooks
import useHomePage from '../../hooks/useHomePage'

import Rethink from './Sections/Rethink'
import Hero from './Sections/Hero'
import Implants from './Sections/Implants'
import Testimonials from './Sections/Testimonials'
import Blog from './Sections/Blog'

import Billboard from '../Billboard'

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
      <Testimonials />
      <Blog />
      <Billboard {...billboardProps} />
    </S.HomePage>
  )
}

export default HomePage
