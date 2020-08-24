// Rethink page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

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

// ___________________________________________________________________
