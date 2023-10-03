// Job Post template

// Libraries
import React from 'react'

// Components
import SEO from '@/components/SEO'
import JobPost from '@/components/JobPost'

const JobPostTemplate: React.FC<CareersContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  return (
    <>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title} | `}
        desc={`${page.title} | `}
        individual={false}
      />
      <JobPost pageContext={pageContext} />
    </>
  )
}

export default JobPostTemplate
