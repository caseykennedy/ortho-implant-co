// News page

// Libraries
import React from 'react'

// Components
import SEO from '@/components/SEO'
import BlogPage from '../views/BlogPage'

const News = () => {
  return (
    <>
      <SEO
        pathname={`/news`}
        title={`News | Orthopaedic Implant Co.`}
        desc={`Find company news, press and blog posts.`}
        individual={false}
      />
      <BlogPage />
    </>
  )
}

export default News
