// Terms page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TermsPage from '../templates/TermsPage'

// Hooks
import useTerms from '../hooks/useTerms'

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
      <TermsPage />
    </Layout>
  )
}

export default Terms
