// Implants page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ImplantsPage from '../components/ImplantsPage'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Implants = () => {
  return (
    <Layout>
      <SEO
        pathname={`/implants`}
        title={`Contact us | Orthopaedic Implant Co.`}
        desc={`Ready to chat? Talk to us.`}
        individual={true}
      />
      <AnimatedBox>
        <ImplantsPage />
      </AnimatedBox>
    </Layout>
  )
}

export default Implants
