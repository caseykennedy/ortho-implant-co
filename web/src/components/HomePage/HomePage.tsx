// HomePage:

// ___________________________________________________________________

import React from 'react'

import Rethink from './Sections/Rethink'
import Hero from './Sections/Hero'
import Implants from './Sections/Implants'

import * as S from './styles.scss'
import { Text, Heading, Box, Flex } from '../../elements'
import Divider from '../../elements/Divider'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Rethink />
      <Implants />
      <Divider bg="primary" py={8} />
    </S.HomePage>
  )
}

export default HomePage
