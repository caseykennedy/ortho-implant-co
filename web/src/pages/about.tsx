// About page

// ___________________________________________________________________

import React from 'react'
import { useSpring, config } from 'react-spring'

import { AnimatedBox } from '../elements'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import About from '../components/About'

import theme from '../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <Layout>
      <SEO
        pathname="/about"
        title="About the Cahuilla Band of Indians"
        desc="The Mission of the Cahuilla Tribal Administration is to bring about a better way of life for Cahuilla people, Tribal People, and the surrounding Communities by protecting and exercising self-governing rights."
        individual={true}
      />
      <AnimatedBox>
        <About />
      </AnimatedBox>
    </Layout>
  )
}

export default AboutPage
