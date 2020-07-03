// Job Post template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox, Box, Heading } from '../elements'
import Divider from '../elements/Divider'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CareersPage from '../components/CareersPage'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const JobPostTemplate: React.FC<CareersContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  // console.log('—————|— implants —|—————')
  // console.log(page)

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
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title} | `}
        desc={`${page.title} | `}
        individual={false}
      />
      <AnimatedBox style={pageAnimation}>
        <CareersPage pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default JobPostTemplate

// ___________________________________________________________________
