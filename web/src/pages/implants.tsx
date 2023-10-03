// Implants page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import ImplantsPage from '../views/ImplantsPage'

// ___________________________________________________________________

const Implants = () => {
  return (
    <>
      <SEO
        pathname={`/implants`}
        title={`Implants | Orthopaedic Implant Co.`}
        individual={true}
      />
      <ImplantsPage />
    </>
  )
}

export default Implants
