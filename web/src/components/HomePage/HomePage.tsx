// HomePage:

// ___________________________________________________________________

import React from 'react'

// Hooks
import useHomePage from '../../hooks/useHomePage'

// Sections
import Rethink from './Rethink'
import Hero from './Hero'
import Implants from './Implants'
import Testimonials from './Testimonials'
import Blog from './Blog'

// Components
import Billboard from '../Billboard'

// Theme
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
