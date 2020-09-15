// Rethink page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import RethinkPage from '../components/RethinkPage'

// Hooks
import useRethinkPage from '../hooks/useRethinkPage'

// Elements
import { AnimatedBox } from '../elements'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Rethink = () => {
  const page = useRethinkPage()
  return (
    <Layout>
      <SEO
        pathname={`/rethink`}
        title={`Rethink Orthopaedic Implants | Orthopaedic Implant Co.`}
        desc={page.pageTitle.message}
        banner={page.billboard.figure.asset.fluid.src}
        individual={true}
      />
      <AnimatedBox>
        <RethinkPage />
      </AnimatedBox>
    </Layout>
  )
}

export default Rethink
