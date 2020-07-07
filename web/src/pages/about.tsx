// About page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AboutPage from '../components/AboutPage'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const About = () => {
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox>
        <AboutPage />
      </AnimatedBox>
    </Layout>
  )
}

export default About

// ___________________________________________________________________
