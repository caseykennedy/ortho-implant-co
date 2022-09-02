// About page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AboutPage from '../templates/AboutPage'

// Hooks
import useAboutPage from '../hooks/useAboutPage'

// ___________________________________________________________________

const About = () => {
  const page = useAboutPage()
  return (
    <Layout>
      <SEO
        pathname={`/about`}
        title={`About us | Orthopaedic Implant Co.`}
        desc={page.pageTitle.message}
        banner={page.pageTitle.image.asset.gatsbyImageData.src}
        individual={true}
      />
      <AboutPage />
    </Layout>
  )
}

export default About
