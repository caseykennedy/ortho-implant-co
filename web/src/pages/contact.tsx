// Contact page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactPage from '../templates/ContactPage'

// Hooks
import useContactPage from '../hooks/useContactPage'

// ___________________________________________________________________

const Contact = () => {
  const page = useContactPage()
  return (
    <Layout>
      <SEO
        pathname={`/contact`}
        title={`Contact us | Orthopaedic Implant Co.`}
        desc={page.pageTitle.message}
        banner={page.billboard.figure.asset.gatsbyImageData.src}
        individual={true}
      />
      <ContactPage />
    </Layout>
  )
}

export default Contact
