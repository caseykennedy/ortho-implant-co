// News page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPage from '../templates/BlogPage'

// ___________________________________________________________________

const News = () => {
  return (
    <Layout>
    <SEO
      pathname={`/news`}
      title={`News | Orthopaedic Implant Co.`}
      desc={`Find company news, press and blog posts.`}
      individual={false}
    />
    <BlogPage />
    </Layout>
  )
}

export default News
