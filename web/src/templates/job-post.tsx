// Job Post template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import JobPost from '../components/JobPost'

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
      <JobPost pageContext={pageContext} />
    </Layout>
  )
}

export default JobPostTemplate
