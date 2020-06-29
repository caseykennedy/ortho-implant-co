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

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: 'primary',
  message: 'Let\'s schedule<br />a one-to-one',
  title: 'Ready to chat?',
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Rethink />
      <Implants />
      <Reviews />
      <Mantra />
      <Blog />
      <Prefooter />
    </S.HomePage>
  )
}

export default HomePage
