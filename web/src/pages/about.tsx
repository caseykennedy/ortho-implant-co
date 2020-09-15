// About page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AboutPage from '../components/AboutPage'

// Hooks
import useAboutPage from '../hooks/useAboutPage'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const About = () => {
  const page = useAboutPage()
  return (
    <Layout>
      <SEO
        pathname={`/about`}
        title={`About us | Orthopaedic Implant Co.`}
        desc={page.pageTitle.message}
        banner={page.pageTitle.image.asset.fluid.src}
        individual={true}
      />
      <AnimatedBox>
        <AboutPage />
      </AnimatedBox>
    </Layout>
  )
}

export default About
