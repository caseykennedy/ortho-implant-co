// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../templates/HomePage'

// ___________________________________________________________________

const Index = () => {
  return (
    <Layout>
      <SEO />
      <HomePage />
    </Layout>
  )
}

export default Index
