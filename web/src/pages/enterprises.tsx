// Enterprise page

// ___________________________________________________________________

import React from 'react'
import { useSpring, config } from 'react-spring'

import { AnimatedBox } from '../elements'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Enterprises from '../components/Enterprises'

import theme from '../../config/theme'

// ___________________________________________________________________

const EnterprisePage = () => {
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
        <Enterprises />
      </AnimatedBox>
    </Layout>
  )
}

export default EnterprisePage
