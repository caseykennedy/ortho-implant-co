// Resources page

// Libraries
import React from 'react'

// Components
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import IfuPage from '../views/ResourcesPage'

const Resources = () => {
  return (
    <>
      <SEO pathname={`/resources`} title={`Resources | Orthopaedic Implant Co.`} individual={true} />
      <IfuPage />
    </>
  )
}

export default Resources
