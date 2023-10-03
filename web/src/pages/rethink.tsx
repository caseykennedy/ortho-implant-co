// Rethink page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import RethinkPage from '../views/RethinkPage'

// Hooks
import useRethinkPage from '../hooks/useRethinkPage'

// ___________________________________________________________________

const Rethink = () => {
  const page = useRethinkPage()
  return (
    <>
      <SEO
        pathname={`/rethink`}
        title={`Rethink Orthopaedic Implants | Orthopaedic Implant Co.`}
        desc={page.pageTitle.message}
        banner={page.billboard.figure.asset.url}
        individual={true}
      />
      <RethinkPage />
    </>
  )
}

export default Rethink
