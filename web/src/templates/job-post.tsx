// Job Post template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox, Box, Heading } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import JobPost from '../components/JobPost'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const JobPostTemplate: React.FC<CareersContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title} | `}
        desc={`${page.title} | `}
        individual={false}
      />
      <AnimatedBox>
        <JobPost pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default JobPostTemplate
