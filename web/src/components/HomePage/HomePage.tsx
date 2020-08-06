// HomePage:

// ___________________________________________________________________

import React from 'react'

import Rethink from './Sections/Rethink'
import Hero from './Sections/Hero'
import Implants from './Sections/Implants'
import Reviews from './Sections/Reviews'
import Mantra from './Sections/Mantra'
import Blog from './Sections/Blog'
import Prefooter from '../Footer/Prefooter'
import Billboard from '../Billboard'

import { Box, Flex, Heading } from '../../elements'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.tertiary,
  // btnText: 'See our implants',
  to: '/contact',
  color: theme.colors.white,
  message: "Let's schedule<br />a one-to-one",
  title: 'Ready to chat?',
  invert: false,
  src: 'sports.jpg',
  altText: 'Doctors in the operating room.'
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Rethink />
      {/* <Box bg="black" py={8} /> */}
      {/* <Implants /> */}
      <Reviews />
      <Mantra />
      <Blog />
      {/* <Box bg="black" py={8} /> */}
      
      {/* <Prefooter /> */}

      <Billboard {...billboardProps} />
      {/* <Box bg="black" py={7} /> */}
    </S.HomePage>
  )
}

export default HomePage
