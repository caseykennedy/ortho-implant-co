// Terms page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TermsPage from '../components/TermsPage'

// Hooks
import useTerms from '../hooks/useTerms'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Terms = () => {
  const page = useTerms()
  return (
    <Layout>
      <SEO
        pathname="/terms"
        title={page.pageTitle.message}
        individual={true}
      />
      <AnimatedBox>
        <TermsPage />
      </AnimatedBox>
    </Layout>
  )
}

export default Terms
