// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../components/HomePage'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Index = () => {
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <HomePage />
      </AnimatedBox>
    </Layout>
  )
}

export default Index

// ___________________________________________________________________
