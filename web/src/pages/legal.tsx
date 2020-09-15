// Legal page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import LegalPage from '../components/LegalPage'

// Elements
import { AnimatedBox } from '../elements'

// Hooks
import useLegal from '../hooks/useLegal'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Legal = () => {
  const page = useLegal()
  return (
    <Layout>
      <SEO
        pathname="/legal"
        title={page.pageTitle.message}
        individual={true}
      />
      <AnimatedBox>
        <LegalPage />
      </AnimatedBox>
    </Layout>
  )
}

export default Legal
