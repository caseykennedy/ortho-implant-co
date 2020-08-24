// Contact page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactPage from '../components/ContactPage'

// Hooks
import useContactPage from '../hooks/useContactPage'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Contact = () => {
  const page = useContactPage()

  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO
        pathname={`/contact`}
        title={`Contact us | Orthopaedic Implant Co.`}
        desc={page.pageTitle.message}
        banner={page.billboard.figure.asset.fluid.src}
        individual={true}
      />
      <AnimatedBox>
        <ContactPage />
      </AnimatedBox>
    </Layout>
  )
}

export default Contact

// ___________________________________________________________________
