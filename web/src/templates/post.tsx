// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Post from '../components/Post'

// ___________________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.title}`}
        desc={`${page.title}`}
        banner={`${page.mainImage.asset.url}`}
        individual={false}
      />
      <Post pageContext={pageContext} />
    </Layout>
  )
}

export default PostTemplate
