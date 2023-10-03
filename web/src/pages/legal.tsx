// Legal page

// Libraries
import React from 'react'

// Components
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import LegalPage from '../views/LegalPage'

// Hooks
import useLegal from '../hooks/useLegal'

const Legal = () => {
  const page = useLegal()
  return (
    <>
      <SEO pathname="/legal" title={page.pageTitle.message} individual={true} />
      <LegalPage />
    </>
  )
}

export default Legal
